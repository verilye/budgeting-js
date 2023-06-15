# Using Node 18, flavour -> alpine
FROM node:18-alpine

# This should be the location of the app.js?

WORKDIR /src

# Copy app files into workdir

COPY . .

# ==== BUILD ==== 
# Install dependancies (npm ci installs EXACT versions specified in package-lock)

RUN npm ci

# Build the app

RUN npm run build

# ==== RUN ====
# Set the env to production

# Expose the port that is used for npm start when making the app
EXPOSE 3000

# Start the app

CMD ["npx", "serve", "build"];


