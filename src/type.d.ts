interface IChildren {
  children: JSX.Element[] | JSX.Element | ReactNode;
}

interface ICard {
  title: string;
  description: string;
  tags: [] | Array<string>;
}

interface IScrollBox {
  children: JSX.Element<ICard> | Array<JSX.Element<ICard>>;
}
