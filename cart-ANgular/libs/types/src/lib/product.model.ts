export class ProductArray {
    constructor() {}
    kind: string | null;
    totalItems: number | null;
    items: Product[] = [];
}

export class Product {
    constructor() {}
    kind: string | null;
    id: string | null;
    etag: string | null;
    selfLink: string | null;
    volumeInfo: any;
    saleInfo: any;
    accessInfo: any;
    searchInfo: any;
}

export class VolumeInfo {
     constructor() {}
    title: string | null;
    subtitle: string | null;
    authors: any;
    publisher: string | null;
    publishedDate: string | null;
    description: string | null;
    industryIdentifiers: IndustryIdentifiers[];
    readingModes: any;
    pageCount: number | null;
    printType: string | null;
    maturityRating: string | null;
    averageRating: number | null;
    ratingsCount: number | null;
    allowAnonLogging: boolean;
    contentVersion: string | null;
    panelizationSummary: any;
    imageLinks: any;
    language: string | null;
    previewLink: string | null;
    infoLink: string | null;
    canonicalVolumeLink: string | null;
}

export class  SaleInfo{
    constructor(){}
    country: string | null;
    saleability: string | null;
    isEbook: boolean;
}

export class AccessInfo {
constructor() {}
    country: string | null;
    viewability: string | null;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string | null;
    epub: { isAvailable: boolean; };
    pdf: { isAvailable: boolean; };
    webReaderLink: string | null;
    accessViewStatus: string | null;
    quoteSharingAllowed: boolean;

}

export class IndustryIdentifiers {
    constructor() {}
    type: string | null;
    identifier: string | null;
  }
