module.exports = {
    siteMetadata: {
        title: `روزنوشته‌های حسام‌ کاوه`,
        subtitle: `روزنوشته ها و مطالب یک توسعه دهنده`,
    },
    plugins: [
        // https://public-api.wordpress.com/wp/v2/sites/gatsbyjsexamplewordpress.wordpress.com/pages/
        /*
         * Gatsby's data processing layer begins with “source”
         * plugins. Here the site sources its data from Wordpress.
         */
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                baseUrl: `back.hesamkaveh.com`,
                protocol: `http`, // The protocol. This can be http or https.
                // Indicates whether the site is hosted on wordpress.com.
                // If false, then the asumption is made that the site is self hosted.
                // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
                // If your site is hosted on wordpress.org, then set this to false.
                hostingWPCOM: false,
                // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
                // This feature is untested for sites hosted on Wordpress.com
                useACF: false,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-125787492-1",
                // Puts tracking script in the head instead of the body
                head: true,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://hesamkaveh.com`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
    ],
}
