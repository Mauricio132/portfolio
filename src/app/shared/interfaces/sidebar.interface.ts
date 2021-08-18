export interface SideBarOption {
    data    : GroupModule[];    
}

export interface GroupModule {
    name        : string;
    app         : App[];
}

export interface App {
    nombre      : string;
    routerLink  : string;
    icon        : string;
    class       : string;
    unique      : boolean;
    level2      : Level2[];
}

export interface Level2 {
    nombre      : string;
    routerLink  : string;
}