export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'multiplicar' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'somar' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'subtrair' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
