/**
 * Created by Naizer on 29/03/2016.
 */
define([
  'jquery',
  'lodash',
  'backbone',
  'TweenMax',
  'views/ui/navbar_view',
  'views/pages/home_view',
  'views/pages/unbox_view',
  'views/pages/solutions_view',
  'views/pages/projects_view',
  'views/pages/clients_view',
  'views/pages/contact_view',
  'views/pages/footer_view'

], function($, _, Backbone, TweenMax, NavbarView, HomeView, UnboxView, SolutionsView, ProjectsView, ClientsView, ContactView, FooterView) {

  return Backbone.Router.extend({

    routes: {
      //':page(/:id)': 'scrollTo'
    },

    initialize: function() {
      console.log('Router.initialize');

      _.bindAll(this, 'scrollTo', 'checkUrlHash', 'openSubPage');

      this.views = {
        'navbar': new NavbarView(),
        'home': new HomeView(),
        'unbox': new UnboxView(),
        'solutions': new SolutionsView(),
        'projects': new ProjectsView(),
        'clients': new ClientsView(),
        'contact': new ContactView(),
        'footer': new FooterView()
      };

      this.isTweening = false;
      this.currentRoute = '';
    },

    renderAll: function() {
      console.log('Router.renderAll');

      _.forEach(this.views, function(view) {
        view.render();
        view.transitionIn();
      });

      // block default anchor event
      let that = this;
      $('.nav-link').on('click', function(e) {
        e.preventDefault();

        var url = $(this).attr('href');
        that.scrollTo(url);
        console.log('Router.nav-link:', url);

        //Backbone.history.navigate(url, { trigger: false });
      });

      $('.portfolio-link').on('click', function(e) {
        e.preventDefault();

        var url = $(this).attr('href');
        var page = url.split('/')[0];
        var pageID = url.split('/')[1];

        console.log('Router.portfolio-link:', url);

        that.openSubPage(page, pageID);
        //Backbone.history.navigate(url, { trigger: false });
      });

      //init ScrollSpy
      //$('body').on('activate.bs.scrollspy', $.proxy(this.checkUrlHash, this));

      var baseFolder = window.location.pathname.replace('/', '').split('/')[0];
      console.log("App.baseFolder:", baseFolder);

      Backbone.history.start({ pushState: false, root: baseFolder });
    },

    scrollTo: function(page) {

      page = page.indexOf('/') === -1 ? page : page.split('/')[0];

      console.log('Router.scrollTo:', page);

      if (page !== undefined && page.length > 0) {
        if (this.currentRoute != page) {

          var $anchor = $(page);
          this.isTweening = true;

          TweenMax.to(window, 1.5, {
            scrollTo: { y: $anchor.offset().top },
            ease: Power3.easeInOut,
            onAutoKill: this.onAutoKill,
            onComplete: this.onCompleteScroll,
            onCompleteScope: this,
            onCompleteParams: [page]
          });
        }
      }
    },

    onAutoKill: function() {
      this.isTweening = false;
    },

    checkUrlHash: function() {
      if (!this.isTweening) {
        var currentSection = $('.nav li.active > a').attr('href');
        Backbone.history.navigate('#' + currentSection, { trigger: false });
        this.currentRoute = Backbone.history.getFragment();
      }
    },

    onCompleteScroll: function(options) {
      this.isTweening = false;
      //this.currentRoute = Backbone.history.getFragment();
    },

    openSubPage: function(page, id) {
      console.log('Router.openSubPage:', page, '(' + id + ')');

      if (page === '#projects' && id.length > 0) {
        $('#portfolioModal' + id).modal('show');
      }
    }
  });
});
