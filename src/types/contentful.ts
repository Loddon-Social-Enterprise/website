import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

type RichTextField = {
  json: CFRichTextTypes.Document;
  links?: Array<CFRichTextTypes.Link>;
};

export interface IPageFields {
  pageTitle: Contentful.EntryFields.Symbol;
  body?: RichTextField;
}

export interface IHomepageFields {
  pageTitle: Contentful.EntryFields.Symbol;
  mainContentBody?: RichTextField;
  calloutQuote?: RichTextField;
  alertMessage?: RichTextField;
}

export interface IContactPageFields {
  pageTitle: Contentful.EntryFields.Symbol;
  contactBody?: RichTextField;
  mapAddress?: RichTextField;
  mapSettings?: {
    lat: string;
    lng: string;
    zoom: number;
  };
}

export interface IPartnerListFields {
  slug?: Contentful.EntryFields.Symbol;
  companyName?: Contentful.EntryFields.Text;
  description?: RichTextField;
  logo?: {
    url: string;
    width: number;
    height: number;
  };
  testimonial?: RichTextField;
}

export interface IFooterFields {
  slug?: Contentful.EntryFields.Symbol;
  registrations?: RichTextField;
  contacts?: RichTextField;
}
