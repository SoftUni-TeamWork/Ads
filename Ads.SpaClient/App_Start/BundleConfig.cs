// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BundleConfig.cs" company="">
//   Copyright © 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Ads.SpaClient
{
    using System.Web;
    using System.Web.Optimization;

    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/content/css/app").Include("~/content/app.css"));

            bundles.Add(new ScriptBundle("~/js/jquery").Include("~/scripts/vendor/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/js/angular").Include(
                "~/scripts/vendor/angular.js",
                "~/scripts/vendor/angular-resource.js"));

            bundles.Add(new ScriptBundle("~/js/app").Include(
                "~/scripts/vendor/angular-ui-router.js",
                "~/scripts/filters/filters.js",
                "~/scripts/filters/range-filter.js",
                "~/scripts/services/services.js",
                "~/scripts/services/ads-data.js",
                "~/scripts/directives/directives.js",
                "~/scripts/controllers/controllers.js",
                "~/scripts/controllers/home-controller.js",
                "~/scripts/controllers/login-controller.js",
                "~/scripts/controllers/error-404-controller.js",
                "~/scripts/app.js"));
        }
    }
}