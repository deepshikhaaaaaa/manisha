/** @type {import('next').NextConfig} */
const nextConfig = {
    styles: [
        {
          // This loads Bootstrap CSS globally
          src: 'bootstrap/dist/css/bootstrap.min.css',
          dest: 'public',
        },
      ],
}

module.exports = nextConfig
