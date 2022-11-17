import { DateParts } from './date-parts.interface';
import { WorkAuthor } from './work-author.interface';
import { WorkLicense } from './work-license.interface';
import { WorkLink } from './work-link.interface';
import { WorkReference } from './work-reference.interface';
import { WorkResource } from './work-resource.interface';
import { WorkType } from './work-type.interface';

export interface Work {
  "indexed": DateParts;
  "reference-count": number;
  "publisher": string;
  "issue": string;
  "license": WorkLicense[];
  "content-domain": WorkContentDomain;
  "short-container-title": string[];
  "published-print": DateParts;
  "DOI": string;
  "type": WorkType;
  "created": DateParts;
  "page": string;
  "source": string;
  "is-referenced-by-count": number;
  "title": string[];
  "prefix": string;
  "volume": string;
  "author": WorkAuthor[];
  "member": string;
  "reference": WorkReference[];
  "container-title": string[];
  "link": WorkLink[];
  "deposited": DateParts;
  "score": number;
  "resource": WorkResource;
  "issued": DateParts;
  "references-count": number;
  "journal-issue": WorkJournalIssue;
  "URL": string;
  "ISSN": string[];
  "issn-type": WorkIssnType[];
  "subject": string[];
  "published": DateParts;
}

export interface WorkContentDomain {
  "domain": string[];
  "crossmark-restriction": boolean;
}

export interface WorkJournalIssue {
  "issue": string;
}

export interface WorkIssnType {
  "value": string;
  "type": string;
}