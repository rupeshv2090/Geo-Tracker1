// import { Util } from '../common/util';

// const claimsKey = 'https://sentinelda.com/claims';
// const userIdKey = 'https://sentinelda.com/user_id';
// const operatorIdKey = 'https://sentinelda.com/operator_id';
// const emailKey = 'email';

// class AccessToken implements IAccessToken {
//   public readonly roles: string[];
//   public readonly email: string;
//   public readonly userId: string;
//   public readonly operatorId?: string;
//   readonly isInContext = false;

//   constructor(readonly raw: string, readonly jwt: IJwt) {
//     this.roles = <string[]>jwt.data[claimsKey] || [];
//     this.email = <string>jwt.data[emailKey];
//     this.userId = <string>jwt.data[userIdKey];
//     this.operatorId = <string>jwt.data[operatorIdKey] || undefined;
//   }

//   get isLoggedIn(): boolean {
//     // TODO: expiration check
//     return true;
//   }
// }

// class ContextAccessToken implements IAccessToken {
//   public get raw(): string { return this.token.raw; }
//   public get jwt(): IJwt { return this.token.jwt; }
//   public get email(): string { return this.token.email; }
//   public get userId(): string { return this.token.userId; }
//   public get isLoggedIn(): boolean { return this.token.isLoggedIn; }
//   public readonly isInContext = true;
//   public readonly roles: string[];

//   constructor(
//     private token: IAccessToken,
//     public readonly operatorId: string
//   ) {
//     this.roles = token.roles
//       .filter(x => x !== 'Host')
//       .concat(['Operator', 'Admin']);
//   }
// }

// class InvalidAccessToken implements IAccessToken {
//   readonly raw: string = '';
//   readonly jwt: IJwt = undefined;

//   readonly roles: string[] = [];
//   readonly email = '';
//   readonly userId = '';
//   readonly operatorId: string = undefined;
//   readonly isLoggedIn = false;
//   readonly isInContext = false;
// }

// export interface IJwt {
//   readonly header: object;
//   readonly data: { [index:string] : string | string[] };
//   readonly signature: string;
// }

// export interface IAccessToken extends IUserData {
//   readonly raw: string;
//   readonly jwt: IJwt;
// }

// export interface IUserData {
//   readonly email: string;
//   readonly userId: string;
//   readonly roles: string[];
//   readonly operatorId?: string;
//   readonly isLoggedIn: boolean;
//   readonly isInContext: boolean;
// }

// export class AccessTokenFactory {
//   public static readonly empty: IAccessToken = new InvalidAccessToken();

//   public static fromJwt(raw: string): IAccessToken {
//     if (raw.length === 0) {
//       return AccessTokenFactory.empty;
//     }

//     try {
//       const parts = raw.split('.');

//       if (parts.length !== 3) {
//         return AccessTokenFactory.empty;
//       }

//       const header = Util.decodeBase64url(parts[0]);
//       const data = Util.decodeBase64url(parts[1]);
//       const signature = Util.decodeBase64url(parts[2]);

//       const token = {
//         header: JSON.parse(header),
//         data: JSON.parse(data),
//         signature: signature
//       };

//       return new AccessToken(raw, token);
//     } catch (e) {
//       return AccessTokenFactory.empty;
//     }
//   }

//   public static withContext(token: IAccessToken, op: string): IAccessToken {
//     return new ContextAccessToken(token, op);
//   }
// }
