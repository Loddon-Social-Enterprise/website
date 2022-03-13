import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface IHomepageFields {
    pageTitle: Contentful.EntryFields.Symbol;
    dummyContent?: {
        json: CFRichTextTypes.Document;
    };
}
