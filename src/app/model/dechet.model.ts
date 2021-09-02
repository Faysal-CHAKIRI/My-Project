export interface IDechet{
  Source?: string;
  Date_collecte?: string;
  Code_client?: string;
  RS_client?: string;
  Site?: string;
  Type_collecte?: string;
  Dechet?: string;
  Quantite?: number;
  Code_traitement?: string;
  Annee?: string;
  Mois?: string;

  

}

export class Dechet implements IDechet{
  constructor(
      public Source?: string,
      public Date_collecte?: string,
      public Code_client?: string,
      public RS_client?: string,
      public Site?: string,
      public Type_collecte?: string,
      public Dechet?: string,
      public Quantite?: number,
      public Code_traitement?: string,
      public Annee?: string,
      public Mois?: string
  ){}

}
