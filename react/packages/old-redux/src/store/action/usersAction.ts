export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");

export const createAddUserAction = (user: any) => ({
  type: ADDUSER,
  payload: user,
});

export const createDeleteUserAction = (id: any) => ({
  type: DELETEUSER,
  payload: id,
});

export const createUpdateUserAction = (id: any, newUserData: any) => ({
  type: UPDATEUSER,
  payload: {
    ...newUserData,
    id,
  },
});
