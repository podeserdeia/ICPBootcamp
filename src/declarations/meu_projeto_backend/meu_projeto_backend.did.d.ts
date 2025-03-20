import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'multiplicar' : ActorMethod<[bigint, bigint], bigint>,
  'somar' : ActorMethod<[bigint, bigint], bigint>,
  'subtrair' : ActorMethod<[bigint, bigint], bigint>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
