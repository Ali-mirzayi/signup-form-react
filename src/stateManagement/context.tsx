import * as React from "react";

type UserSubmitForm = {
  username: string;
  phone: string;
  email: string;
  password: string;
  showPassword: boolean;
  helperText?: React.ReactNode | any | undefined;
};

interface AppContextInterface {
  values: UserSubmitForm;
  setValues:  React.Dispatch<React.SetStateAction<{
    username: string;
    phone: string;
    email: string;
    password: string;
    showPassword: boolean;
}>>;
}

export const SimpleCtx = React.createContext<AppContextInterface>({} as AppContextInterface);

const CtxProvider= ({children}:any) => {
  const [values, setValues] = React.useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    showPassword: false
  });

  return (
    <SimpleCtx.Provider
      value={{
        values,
        setValues
      }}
    >
      {children}
    </SimpleCtx.Provider>
  );
};

export default CtxProvider;

export const useCtx = () => React.useContext(SimpleCtx)
