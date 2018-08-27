module.exports = {
  siteMetadata: {
    title: 'Pitt + React',
    description: 'Pitt is learning how to build his first site using React',
    keywords: 'react, learning react'
  },

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pfd9jwnkwxdd`,
        accessToken: `5509a8de6d76ff148d06fe5b4bd8fe246761ed7ec130221333dfc3c4dc57dc56`,
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
