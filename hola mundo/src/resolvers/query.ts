import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query : {
        hola(): string{
            return 'Hola desde hola';
        },
        holaNombre(__: void, {nombre}) : string{
            return `Hola querido ${nombre}`;
        },
        holaAlCursoGraphQL(): string{
            return 'Hola desde hola al curso de GraphQL'
        }
    }
}

export default query;