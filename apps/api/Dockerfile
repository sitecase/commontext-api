FROM node:18 AS development
RUN corepack enable
ENV PNPM_VERSION=7.11.0
ENV PNPM_HOME="/pnpm"
# RUN corepack prepare pnpm@latest --activate
RUN corepack prepare pnpm@${PNPM_VERSION} --activate
# RUN pnpm setup
# export PNPM
RUN mkdir ${PNPM_HOME}
ENV PATH="${PNPM_HOME}/:$PATH"

WORKDIR /usr/src/app
COPY package*.json ./

RUN pnpm install
# RUN pnpm install --only=production
ENV DATABASE_URL=file:./dev.db
COPY . .
RUN pnpm exec prisma generate && pnpm exec prisma db push
RUN pnpm run build

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PORT=3000

EXPOSE ${PORT}
CMD ["node", "dist/main"]
