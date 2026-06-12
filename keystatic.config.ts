import { config, collection, singleton, fields } from '@keystatic/core';

const imageObject = (label: string) =>
  fields.object({
    src: fields.text({ label: 'Image Path', description: 'e.g. /pictures/my-image.jpg' }),
    alt: fields.text({ label: 'Alt Text' }),
    width: fields.integer({ label: 'Width', defaultValue: 1365 }),
    height: fields.integer({ label: 'Height', defaultValue: 2048 }),
  }, { label });

const buttonObject = (label: string) =>
  fields.object({
    label: fields.text({ label: 'Button Label' }),
    href: fields.text({ label: 'Link' }),
  }, { label });

export default config({
  storage:
    process.env.NEXT_PUBLIC_VERCEL_ENV
      ? {
          kind: 'github',
          repo: 'marc432234/tokyo-sushu-2',
          branchPrefix: 'keystatic/',
        }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Tokyo Club CMS' },
  },

  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'slug',
      path: 'content/blog/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.slug({ name: { label: 'Slug', description: 'URL-safe identifier, e.g. south-beach-sushi-night' } }),
        date: fields.date({ label: 'Date', defaultValue: { kind: 'today' } }),
        categories: fields.array(
          fields.relationship({
            label: 'Category',
            collection: 'categories',
          }),
          {
            label: 'Categories',
          }
        ),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/uploads/blog',
          publicPath: '/uploads/blog',
        }),
        body: fields.markdoc({ label: 'Content', options: {}, extension: 'md' }),
      },
    }),
    categories: collection({
      label: 'Categories',
      slugField: 'slug',
      path: 'content/categories/*',
      schema: {
        name: fields.text({
          label: 'Category Name',
        }),
        slug: fields.slug({
          name: {
            label: 'Slug',
          },
        }),
      },
    }),
  },

  singletons: {
    home: singleton({
      label: 'Home Page',
      path: 'content/pages/home',
      format: { data: 'json' },
      schema: {
        seo: fields.object({
          title: fields.text({ label: 'SEO Title' }),
          description: fields.text({ label: 'SEO Description', multiline: true }),
        }, { label: 'SEO' }),

        hero: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          video: fields.text({ label: 'Video Path', description: 'e.g. /videos/tokyo-hero.mp4' }),
          poster: imageObject('Poster Image'),
          sideImage: imageObject('Side Image'),
          primaryButtonLabel: fields.text({ label: 'Primary Button Label' }),
          secondaryButton: buttonObject('Secondary Button'),
          marquee: fields.array(
            fields.text({ label: 'Item' }),
            { label: 'Marquee Items', itemLabel: (props) => props.value }
          ),
        }, { label: 'Hero' }),

        experience: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          pillars: fields.array(
            fields.object({
              title: fields.text({ label: 'Title' }),
              body: fields.text({ label: 'Body', multiline: true }),
              image: imageObject('Image'),
            }),
            { label: 'Pillars', itemLabel: (props) => props.fields.title.value ?? 'Pillar' }
          ),
        }, { label: 'Experience Carousel' }),

        menuPreview: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          button: buttonObject('Button'),
        }, { label: 'Menu Preview' }),

        events: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          image: imageObject('Image'),
          imageEyebrow: fields.text({ label: 'Image Eyebrow' }),
          imageTitle: fields.text({ label: 'Image Title' }),
          primaryButtonLabel: fields.text({ label: 'Primary Button Label' }),
          secondaryButton: buttonObject('Secondary Button'),
        }, { label: 'Events' }),

        socialProof: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
        }, { label: 'Social Proof' }),

        galleryTeaser: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          button: buttonObject('Button'),
          images: fields.array(
            fields.object({
              src: fields.text({ label: 'Image Path' }),
              alt: fields.text({ label: 'Alt Text' }),
              category: fields.text({ label: 'Category' }),
              width: fields.integer({ label: 'Width', defaultValue: 1365 }),
              height: fields.integer({ label: 'Height', defaultValue: 2048 }),
            }),
            { label: 'Gallery Images', itemLabel: (props) => props.fields.alt.value ?? 'Image' }
          ),
        }, { label: 'Gallery Teaser' }),
      },
    }),

    menu: singleton({
      label: 'Menu Page',
      path: 'content/pages/menu',
      format: { data: 'json' },
      schema: {
        seo: fields.object({
          title: fields.text({ label: 'SEO Title' }),
          description: fields.text({ label: 'SEO Description', multiline: true }),
        }, { label: 'SEO' }),

        hero: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          image: imageObject('Hero Image'),
          primaryButtonLabel: fields.text({ label: 'Reservation Button Label' }),
        }, { label: 'Hero' }),

        menuLinks: fields.object({
          food: buttonObject('Food Menu'),
          drink: buttonObject('Drink Menu'),
        }, { label: 'Menu Links' }),

        footnotes: fields.array(
          fields.text({ label: 'Footnote', multiline: true }),
          { label: 'Footnotes', itemLabel: (props) => props.value?.slice(0, 40) ?? 'Footnote' }
        ),
      },
    }),

    experience: singleton({
      label: 'Experience Page',
      path: 'content/pages/experience',
      format: { data: 'json' },
      schema: {
        seo: fields.object({
          title: fields.text({ label: 'SEO Title' }),
          description: fields.text({ label: 'SEO Description', multiline: true }),
        }, { label: 'SEO' }),

        hero: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          image: imageObject('Hero Image'),
          primaryButtonLabel: fields.text({ label: 'Primary Button Label' }),
          secondaryButton: buttonObject('Secondary Button'),
        }, { label: 'Hero' }),

        sections: fields.object({
          storyEyebrow: fields.text({ label: 'Story Eyebrow' }),
          storyTitle: fields.text({ label: 'Story Title' }),
          storyBodyOne: fields.text({ label: 'Story Body (First Paragraph)', multiline: true }),
          storyBodyTwo: fields.text({ label: 'Story Body (Second Paragraph)', multiline: true }),
          storyImage: imageObject('Story Image'),
          proverb: fields.text({ label: 'Proverb' }),
          proverbTranslation: fields.text({ label: 'Proverb Translation', multiline: true }),
          proverbImage: imageObject('Proverb Image'),
          featuresEyebrow: fields.text({ label: 'Features Eyebrow' }),
          featuresTitle: fields.text({ label: 'Features Title' }),
          creativityEyebrow: fields.text({ label: 'Creativity Eyebrow' }),
          creativityTitle: fields.text({ label: 'Creativity Title' }),
          creativityBodyOne: fields.text({ label: 'Creativity Body (First Paragraph)', multiline: true }),
          creativityBodyTwo: fields.text({ label: 'Creativity Body (Second Paragraph)', multiline: true }),
          finalEyebrow: fields.text({ label: 'Final Section Eyebrow' }),
          finalTitle: fields.text({ label: 'Final Section Title' }),
          finalDescription: fields.text({ label: 'Final Section Description', multiline: true }),
        }, { label: 'Sections' }),
      },
    }),

    gallery: singleton({
      label: 'Gallery Page',
      path: 'content/pages/gallery',
      format: { data: 'json' },
      schema: {
        seo: fields.object({
          title: fields.text({ label: 'SEO Title' }),
          description: fields.text({ label: 'SEO Description', multiline: true }),
        }, { label: 'SEO' }),

        hero: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          image: imageObject('Featured Image'),
        }, { label: 'Hero' }),

        cta: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          buttonLabel: fields.text({ label: 'Button Label' }),
        }, { label: 'CTA' }),
      },
    }),

    contact: singleton({
      label: 'Contact Page',
      path: 'content/pages/contact',
      format: { data: 'json' },
      schema: {
        seo: fields.object({
          title: fields.text({ label: 'SEO Title' }),
          description: fields.text({ label: 'SEO Description', multiline: true }),
        }, { label: 'SEO' }),

        hero: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
          image: imageObject('Hero Image'),
          primaryButtonLabel: fields.text({ label: 'Primary Button Label' }),
          secondaryButton: buttonObject('Secondary Button'),
        }, { label: 'Hero' }),

        occasions: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          { label: 'Occasions', itemLabel: (props) => props.fields.title.value ?? 'Occasion' }
        ),

        formIntro: fields.object({
          eyebrow: fields.text({ label: 'Eyebrow' }),
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
        }, { label: 'Form Intro' }),

        sidebar: fields.object({
          visitEyebrow: fields.text({ label: 'Visit Eyebrow' }),
          callEyebrow: fields.text({ label: 'Call Eyebrow' }),
          callDescription: fields.text({ label: 'Call Description', multiline: true }),
          eventsEyebrow: fields.text({ label: 'Events Eyebrow' }),
          eventsDescription: fields.text({ label: 'Events Description', multiline: true }),
          eventsEmail: fields.text({ label: 'Events Email' }),
          followEyebrow: fields.text({ label: 'Follow Eyebrow' }),
        }, { label: 'Sidebar' }),
      },
    }),

    settings: singleton({
      label: 'Settings',
      path: 'content/pages/settings',
      format: { data: 'json' },
      schema: {
        phoneNumber: fields.text({ label: 'Phone Number', description: 'e.g. (786) 728-9318' }),
        emailAddress: fields.text({ label: 'Email Address', description: 'e.g. info@tokyosushispeakeasy.com' }),
        address: fields.text({ label: 'Address', multiline: true, description: 'Full address for display' }),
        reservationLink: fields.text({ label: 'Reservation Link', description: 'e.g. OpenTable booking URL' }),
        visitMenu: fields.text({ label: 'Visit Menu Label', multiline: true, description: 'Visit section content (footer, contact page)' }),
        phoneNumberMenu: fields.text({ label: 'Phone Menu Label', description: 'Label for phone in navigation/menu' }),
        addressMenu: fields.text({ label: 'Address Menu Label', description: 'Label for address in navigation/menu' }),
      },
    }),
  },
});
