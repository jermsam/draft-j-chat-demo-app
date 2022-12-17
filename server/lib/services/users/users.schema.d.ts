import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const userSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    email: import("@sinclair/typebox").TString<string>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type User = Static<typeof userSchema>;
export declare const userResolver: import("@feathersjs/schema").Resolver<{
    password?: string | undefined;
    id: number;
    email: string;
}, HookContext<any>>;
export declare const userExternalResolver: import("@feathersjs/schema").Resolver<{
    password?: string | undefined;
    id: number;
    email: string;
}, HookContext<any>>;
export declare const userDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    email: import("@sinclair/typebox").TString<string>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, ["email", "password"]>;
export type UserData = Static<typeof userDataSchema>;
export declare const userDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const userDataResolver: import("@feathersjs/schema").Resolver<{
    password?: string | undefined;
    id: number;
    email: string;
}, HookContext<any>>;
export declare const userQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    email: import("@sinclair/typebox").TString<string>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, ["id", "email"]>;
export declare const userQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>>;
    $select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<("id" | "email")[]>>;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>]>>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>]>>;
}>]>;
export type UserQuery = Static<typeof userQuerySchema>;
export declare const userQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const userQueryResolver: import("@feathersjs/schema").Resolver<{
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        id?: number | undefined;
        email?: number | undefined;
    } | undefined;
    $select?: ("id" | "email")[] | undefined;
} & {
    id?: number | {
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
    email?: string | {
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
}, HookContext<any>>;
