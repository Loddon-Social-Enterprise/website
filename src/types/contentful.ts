import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface IHomepageFields {
  pageTitle: Contentful.EntryFields.Symbol;
  mainContentBody?: {
    json: CFRichTextTypes.Document;
  };
  calloutQuote?: {
    json: CFRichTextTypes.Document;
  };
}

export interface IWhatWeDoPageFields {
  pageTitle: Contentful.EntryFields.Symbol;
  mainContentBody?: {
    json: CFRichTextTypes.Document;
  };
}
