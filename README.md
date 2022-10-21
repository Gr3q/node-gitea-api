## gitea-api

[Gitea](https://gitea.io/en-us/) API client for Node. 

Generated with [GitHub - ferdikoomen/openapi-typescript-codegen: NodeJS library that generates Typescript or Javascript clients based on the OpenAPI specification](https://github.com/ferdikoomen/openapi-typescript-codegen).



I will try to keep the package up to date with new released versions.

## To install

`npm i gitea-api`

## To use

```typescript
import { GiteaApi } from "gitea-api";

const client = new GiteaApi({
    BASE: 'https://gitea.domain.com',
    WITH_CREDENTIALS: true,
    TOKEN: ""
});
```

## Development

Generated with (from repo folder):

```bash
cd ..
npm --global i openapi-typescript-codegen
openapi -c fetch -o ./gitea-api/ -i {gitea-url}/swagger.v1.json --name="GiteaApi" --useOptions --client node
```