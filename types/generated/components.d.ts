import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAboutDetail extends Schema.Component {
  collectionName: 'components_components_about_details';
  info: {
    displayName: 'AboutDetail';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.String;
  };
}

export interface ComponentsAbout extends Schema.Component {
  collectionName: 'components_components_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    left: Attribute.Component<'components.about-detail', true>;
    right: Attribute.Component<'components.right', true>;
    image: Attribute.Media;
  };
}

export interface ComponentsAritcleList extends Schema.Component {
  collectionName: 'components_components_aritcle_lists';
  info: {
    displayName: 'ArticleList';
    description: '';
  };
  attributes: {
    list: Attribute.Component<'components.article', true>;
    title: Attribute.String;
    sub_title: Attribute.String;
    info: Attribute.Component<'components.info-content', true>;
  };
}

export interface ComponentsArticle extends Schema.Component {
  collectionName: 'components_components_articles';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    content: Attribute.Text & Attribute.Required;
    button: Attribute.String;
    title: Attribute.String;
    extra: Attribute.String;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ComponentsCustomer extends Schema.Component {
  collectionName: 'components_components_customers';
  info: {
    displayName: 'Customer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Component<'components.image', true>;
  };
}

export interface ComponentsIcon extends Schema.Component {
  collectionName: 'components_components_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    Next: Attribute.Media;
  };
}

export interface ComponentsImage extends Schema.Component {
  collectionName: 'components_components_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    customer_image: Attribute.Media;
  };
}

export interface ComponentsInfoContent extends Schema.Component {
  collectionName: 'components_components_info_contents';
  info: {
    displayName: 'InfoContent';
  };
  attributes: {
    date: Attribute.Date;
    text: Attribute.String;
  };
}

export interface ComponentsInfo extends Schema.Component {
  collectionName: 'components_components_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    content: Attribute.Component<'components.info-content', true>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface ComponentsQuotes extends Schema.Component {
  collectionName: 'components_components_quotes';
  info: {
    displayName: 'quotes';
    description: '';
  };
  attributes: {
    open_quote: Attribute.Media;
    title: Attribute.String;
    line: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'\u201D\u9769\u65B0\u7684\u306A\u4E16\u754C\u306E\u305F\u3081\u306B\u201D\u3092\u5B9F\u73FE\u3059\u308B\u305F\u3081\u306B\u3001\u6211\u3005DTS\u306F\u3001\u304A\u5BA2\u69D8\u3068\u771F\u646F\u306B\u5411\u304D\u5408\u3044\u3001\u304A\u5BA2\u69D8\u3068\u306E\u5BFE\u8A71\u3092\u901A\u3057\u3066\u3001\u304A\u5BA2\u69D8\u306E\u30D3\u30B8\u30CD\u30B9\u3001\u696D\u52D9\u306B\u6700\u3082\u9069\u3057\u305FIT\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u3054\u63D0\u6848\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002  \u201C\u30C7\u30B8\u30BF\u30EB\u5316\u201D \u3092\u3001\u3088\u308A\u8EAB\u8FD1\u306B\u611F\u3058\u3066\u3044\u305F\u3060\u304F\u305F\u3081\u306B\u3001\u79C1\u305F\u3061\u304C\u57F9\u3063\u3066\u304D\u305F\u7D4C\u9A13\u30FB\u80FD\u529B\u3067\u304A\u5BA2\u69D8\u306E\u30D3\u30B8\u30CD\u30B9\u306E\u98DB\u8E8D\u7684\u306A\u6210\u9577\u3092\u5168\u529B\u3067\u3054\u652F\u63F4\u3044\u305F\u3057\u307E\u3059\u3002'>;
    image: Attribute.Media & Attribute.Required;
    close_quote: Attribute.Media & Attribute.Required;
    line_second: Attribute.Text;
  };
}

export interface ComponentsRight extends Schema.Component {
  collectionName: 'components_components_rights';
  info: {
    displayName: 'right';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.String;
  };
}

export interface ComponentsTeachnology extends Schema.Component {
  collectionName: 'components_components_teachnologies';
  info: {
    displayName: 'Technology';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface LayoutContent extends Schema.Component {
  collectionName: 'components_layout_contents';
  info: {
    displayName: 'CONTENT';
    description: '';
  };
  attributes: {
    quotes: Attribute.Component<'components.quotes'>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'FOOTER';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    policy: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Copyright \u00A9 2024 DTS. All rights reserved.'>;
    japanese: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC'>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'HEADER';
    description: '';
  };
  attributes: {
    logo: Attribute.Media & Attribute.Required;
    top: Attribute.Component<'components.link'>;
    profile: Attribute.Component<'components.link'>;
    service: Attribute.Component<'components.link'>;
    consultant: Attribute.Component<'components.button'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.about-detail': ComponentsAboutDetail;
      'components.about': ComponentsAbout;
      'components.aritcle-list': ComponentsAritcleList;
      'components.article': ComponentsArticle;
      'components.button': ComponentsButton;
      'components.customer': ComponentsCustomer;
      'components.icon': ComponentsIcon;
      'components.image': ComponentsImage;
      'components.info-content': ComponentsInfoContent;
      'components.info': ComponentsInfo;
      'components.link': ComponentsLink;
      'components.quotes': ComponentsQuotes;
      'components.right': ComponentsRight;
      'components.teachnology': ComponentsTeachnology;
      'layout.content': LayoutContent;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
