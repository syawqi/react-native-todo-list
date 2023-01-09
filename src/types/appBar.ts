export type TodoAppBarTypeProps = {
  label: string;
  onCreate: () => void;
};

export type CommonAppBarTypeProps = {
  label: string;
  action?: any[];
  canBack?: boolean;
};
