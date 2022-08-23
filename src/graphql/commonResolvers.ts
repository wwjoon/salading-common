import { GraphQLScalarType } from 'graphql';
import { format } from 'date-and-time';

export const commonResolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: '날짜 타입(예. 2019-12-12) ',
    serialize: (value: string) => format(new Date(value), 'YYYY-MM-DD'),
    parseValue: (value: string | Date) => (typeof value === 'string' ? new Date(value) : value),
    parseLiteral: (ast: any) => new Date(ast.value)
  }),
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'Iso Date ',
    serialize: (value: string) => new Date(value).toISOString(),
    parseValue: (value: string) => value,
    parseLiteral: (ast: any) => new Date(ast.value)
  })
};
