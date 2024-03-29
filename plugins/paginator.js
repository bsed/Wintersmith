(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = function(env, callback) {

    /* Paginator plugin. Defaults can be overridden in config.json
        e.g. "paginator": {"perPage": 10}
     */
    var PaginatorPage, defaults, getArticles, key, options, value;
    defaults = {
      template: 'index.jade',
      articles: 'articles',
      first: 'index.html',
      filename: 'page/%d/index.html',
      perPage: 2
    };
    options = env.config.paginator || {};
    for (key in defaults) {
      value = defaults[key];
      if (options[key] == null) {
        options[key] = defaults[key];
      }
    }
    getArticles = function(contents) {
      var articles;
      articles = contents[options.articles]._.directories.map(function(item) {
        return item.index;
      });
      articles = articles.filter(function(item) {
        return item.template !== 'none';
      });
      articles.sort(function(a, b) {
        return b.date - a.date;
      });
      return articles;
    };
    PaginatorPage = (function(_super) {
      __extends(PaginatorPage, _super);


      /* A page has a number and a list of articles */

      function PaginatorPage(pageNum, articles) {
        this.pageNum = pageNum;
        this.articles = articles;
      }

      PaginatorPage.prototype.getFilename = function() {
        if (this.pageNum === 1) {
          return options.first;
        } else {
          return options.filename.replace('%d', this.pageNum);
        }
      };

      PaginatorPage.prototype.getView = function() {
        return function(env, locals, contents, templates, callback) {
          var ctx, template;
          template = templates[options.template];
          if (template == null) {
            return callback(new Error("unknown paginator template '" + options.template + "'"));
          }
          ctx = {
            articles: this.articles,
            pageNum: this.pageNum,
            prevPage: this.prevPage,
            nextPage: this.nextPage
          };
          env.utils.extend(ctx, locals);
          return template.render(ctx, callback);
        };
      };

      return PaginatorPage;

    })(env.plugins.Page);
    env.registerGenerator('paginator', function(contents, callback) {
      var articles, i, numPages, page, pageArticles, pages, rv, _i, _j, _k, _len, _len1;
      articles = getArticles(contents);
      numPages = Math.ceil(articles.length / options.perPage);
      pages = [];
      for (i = _i = 0; 0 <= numPages ? _i < numPages : _i > numPages; i = 0 <= numPages ? ++_i : --_i) {
        pageArticles = articles.slice(i * options.perPage, (i + 1) * options.perPage);
        pages.push(new PaginatorPage(i + 1, pageArticles));
      }
      for (i = _j = 0, _len = pages.length; _j < _len; i = ++_j) {
        page = pages[i];
        page.prevPage = pages[i - 1];
        page.nextPage = pages[i + 1];
      }
      rv = {
        pages: {}
      };
      for (_k = 0, _len1 = pages.length; _k < _len1; _k++) {
        page = pages[_k];
        rv.pages["" + page.pageNum + ".page"] = page;
      }
      rv['index.page'] = pages[0];
      rv['last.page'] = pages[numPages - 1];
      return callback(null, rv);
    });
    env.helpers.getArticles = getArticles;
    return callback();
  };

}).call(this);
