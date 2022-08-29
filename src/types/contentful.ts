import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface IPageFields {
  pageTitle: Contentful.EntryFields.Symbol;
  body?: {
    json: CFRichTextTypes.Document;
  };
}

export interface IHomepageFields {
  pageTitle: Contentful.EntryFields.Symbol;
  mainContentBody?: {
    json: CFRichTextTypes.Document;
  };
  calloutQuote?: {
    json: CFRichTextTypes.Document;
  };
  alertMessage?: {
    json: CFRichTextTypes.Document;
  };
}

export interface IContactPageFields {
  pageTitle: Contentful.EntryFields.Symbol;
  contactBody?: {
    json: CFRichTextTypes.Document;
  };
  mapAddress?: {
    json: CFRichTextTypes.Document;
  };
  mapSettings?: {
    lat: string;
    lng: string;
    zoom: number;
  };
}
