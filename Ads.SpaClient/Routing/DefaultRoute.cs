// --------------------------------------------------------------------------------------------------------------------
// <copyright file="DefaultRoute.cs" company="">
//   Copyright � 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Ads.SpaClient.Routing
{
    using System.Web.Routing;

    public class DefaultRoute : Route
    {
        public DefaultRoute()
            : base("{*path}", new DefaultRouteHandler())
        {
            this.RouteExistingFiles = false;
        }
    }
}
