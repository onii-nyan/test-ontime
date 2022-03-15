const data = {
  articles: [
    {
      id: 1,
      title: '5 Key Concepts to Level Up Your JavaScript Skills',
      slug: '5-key-concepts-to-level-up-your-javascript-skills',
      writer: 'Viduni Wickramarachchi',
      category: 3,
      imageUrl: 'https://miro.medium.com/max/700/1*mdBG1Egnfr0H0JMqLfKW5Q.jpeg',
      content: '<p>The goal of this article is to give a brief introduction to some essential concepts for aspiring JavaScript developers. It is always a good idea to learn about the core concepts of a language or a framework to write code effectively and efficiently. However, if you want to learn something quickly, reading lengthy descriptions would be a hassle. Therefore, this article will explain some core concepts as simply as possible with the following.</p>' +
        '<ul><li>A short description of the concept</li><li>Why it is relevant</li><li>A practical application (Code example)</li></ul>' +
        '<p>Grab a coffee and sit tight! These concepts will change the way you code and help you become an efficient developer with quality code.</p>' +
        '<h1>The concepts that we will explore</h1>' +
        '<ol><li>Destructuring</li><li>Spread Syntax</li><li>Rest Syntax</li><li>Array methods</li><li>Value vs. Reference Variable Assignment</li></ol>' +
        '<h1>Conclusion</h1><p>Mastering these concepts will help you write better and clean code. I hope you gained some knowledge about the concepts discussed and how important they are. Stay tuned for more articles about important JavaScript concepts and how to use them in the future. Let us know in the comments section if you need to learn about any specific concept or technique that would improve your coding and engineering skills.</p>',
      desc: 'The goal of this article is to give a brief introduction to some essential concepts for aspiring JavaScript developers. It is always a good idea to learn about the core concepts of a language or a framework to write code effectively and efficiently. However, if you want to learn something quickly, reading lengthy descriptions would be a hassle. Therefore, this article will explain some core concepts as simply as possible with the following.',
      source: 'https://blog.bitsrc.io/5-key-concepts-to-level-up-your-javascript-skills-6682a65cbf3d',
      created_at: 'Sep 4, 2020'
    },
    {
      id: 2,
      title: 'Text fields & Forms design — UI components series',
      slug: 'text-fields-forms-design-ui-components-series',
      writer: 'Taras Bakusevych',
      category: 2,
      imageUrl: 'https://miro.medium.com/max/1000/1*kIgFEQYSKMk2DSW-yff5jg.jpeg',
      content: '<p>Forms have existed for a significant amount of time, greatly simplifying the task of drafting complaints and various other legal pleadings. With the advance of information and its processing, means to gather the data are also evolving. As printed forms were here for years we can learn a few tips from their design.</p>' +
        '<h1>Text field anatomy</h1><p>Text fields allow users to enter text into a UI. They typically appear in forms and dialogs. Text field component design should provide a clear affordance for interaction, making the fields discoverable in layouts, efficient to fill in, and accessible.</p>' +
        '<strong>Here are key elements of the basic Text field:</strong>' +
        '<ol><li>Container — interactable input area</li><li>Input text — entered into the text field</li>' +
        '<li>Label Text — tell users what information belongs in a given form field</li>' +
        '<li>Placeholder text — is a description or example of the information required that is replaced with input text after users provide it</li>' +
        '<li>Helper or Validation text(optional) — provides additional context or validation message</li>' +
        '<li>Leading icon(optional) — describe the type of input a text field requires</li>' +
        '<li>Trailing icon(optional) — additional control for entered text, like clear, hide/show, etc</li></ol>' +
        '<h1>Text field types</h1>' +
        '<p>Most of them are based on basic text fields that were modified to better handle specific types of information, like the credit card numbers. Here are just a few examples of input types that are most commonly used throughout UIs we creating:</p>' +
        '<h1>Stop ridiculous password creation designs</h1><ul>' +
        '<li>Allow users to unmask their password instead of asking them to enter it 2 times, It will also work better for password generating apps</li>' +
        '<li>Display password requirements all the time, and indicate users\' progress towards meeting all the criteria. Try to simplify requirements for the user.</li>' +
        '<li>Use strength meters encourage users to create stronger passwords</li></ul>',
      desc: 'Forms have existed for a significant amount of time, greatly simplifying the task of drafting complaints and various other legal pleadings. With the advance of information and its processing, means to gather the data are also evolving. As printed forms were here for years we can learn a few tips from their design.',
      source: 'https://uxdesign.cc/text-fields-forms-design-ui-components-series-2b32b2beebd0',
      created_at: 'May 25, 2020'
    },
    {
      id: 3,
      title: 'Fundamentals of Hierarchy in Interface Design (UI)',
      slug: 'fundamentals-of-hierarchy-in-interface-design-ui',
      writer: 'Leonardo Moreno',
      category: 2,
      imageUrl: 'https://miro.medium.com/max/1000/1*4ScAqA2QfOLXuAjuHm4XIw.png',
      content: '<p>Visual hierarchy is the order in which the user process information by importance. In interface design, like in any other form of design, this concept is necessary to be functional at sight. With the correct use of hierarchy, the mind can group and prioritize elements to give them a specific order, which facilitates the understanding of what you want to communicate and the sense of achievement by the user.</p>' +
        '<p>A regular problem in interface design is the excessive use of elements or components scattered on the screen, which if not placed through a correct hierarchy, generate disorder and greater effort in navigation. The exercise of prioritizing these elements is important to avoid this problem.</p>' +
        '<p>The average user tends to “scan” the entire content of a screen. Therefore, the highlights should give a clear idea of what the website or application is about.</p>' +
        '<p>This prioritization should not only be treated as an aesthetic problem, but also as an important part of the user experience. Many of the elements included, especially in mobile devices, will be relevant to site navigation. While the hierarchy in graphic design has existed for years, the constant interaction factor is added to the UI design. The fact that users interact with the elements makes it more relevant to design an intuitive interface.</p>' +
        '<p>There are seven resources that must be taken into account to create a correct hierarchy:</p>' +
        '<h1>Size</h1>' +
        '<p>The larger the element, the more it will attract attention. It is a fact that people first see larger objects, and this includes text and images. The idea behind the use of size hierarchy is to give a focal point to start the visual journey.</p>' +
        '<p>If the jump from one text to another is smaller, say from 32pt to 24pt, it can make the reading order more difficult when sending two messages at the same time. This may not be a big problem, but you should keep in mind that this could create a less efficient hierarchy.</p>' +
        '<p>It is equally unnecessary that the important elements were too large. Creating an unnecessary imbalance can end up overshadowing the rest of the design and cause other information to get lost in the reading. Like everything else in design, balance is the key.</p>' +
        '<h1>Color</h1>' +
        '<p><strong>Bright colors stand out more than muted tones.</strong> Color is a powerful visual resource, its proper use can effectively separate the elements in a screen to prioritize or depriorize them. In interface design, often the strongest color is for interaction, because of the user’s need to take action or receive feedback from the system.</p>' +
        '<h1>Texture</h1>' +
        '<p>Varied and complex textures attract more attention than flat ones. The flat surface of a wall will stand out less than the surface of a pavement. This is because complexity will always attract more user attention than minimalism. The use of textures also incorporates other important design elements such as style and atmosphere.</p>' +
        '<p>When a design does not have a clear visual hierarchy, the user’s navigation is forced into other forms of reading, such as F and Z patterns. As designers, we can reinforce these patterns or break them to find more dynamic forms of communication. In UI design, nothing is just aesthetic, and the visual hierarchy is undoubtedly one of the best weapons we have for directing the user experience, re-powering design standards and offering a direct path to interface objectives.</p>' +
        '<p>Thank you for reading.</p>',
      desc: 'Visual hierarchy is the order in which the user process information by importance. In interface design, like in any other form of design, this concept is necessary to be functional at sight. With the correct use of hierarchy, the mind can group and prioritize elements to give them a specific order, which facilitates the understanding of what you want to communicate and the sense of achievement by the user.',
      source: 'https://medium.com/swlh/fundamentals-of-hierarchy-in-interface-design-ui-ba8e3017dceb',
      created_at: 'Dec 23, 2019'
    },
    {
      id: 4,
      title: 'Top 12 Things That Destroy Developer Productivity',
      slug: 'top-12-things-that-destroy-developer-productivity',
      writer: 'John Lafleur',
      category: 1,
      imageUrl: 'https://miro.medium.com/max/1350/1*-EH48yX3S7pgsPsac4zsEw.jpeg',
      content: '<em>A lot of articles address the role of tech leads and engineering managers. One common theme we often come across is how to increase a team’s productivity. But before you focus your energy trying to increase their productivity, you might first want to consider what’s destroying it, to have a sound base on which you can build. Unfortunately, even though Peopleware was published almost 30 years ago, we see lots of teams suffering from huge productivity loss in some (negatively) remarkable ways!</em>' +
        '<p>No one expects a programmer to get work done without access to a computer, but there are many companies that expect programmers to get work done without access to their mind. This is equally unrealistic.</p>' +
        '<p>So let’s deep dive into our list of 12 things that prevent your developers from getting “into the zone” and being productive. I will try to prioritize this list from most to least impactful. Feel free to comment!</p>' +
        '<p>If you’re wondering if all this is worth the investment, just consider the developer’s salaries. Even 10% more productivity is a LOT!</p>' +
        '<h1>1) Interruptions & Meetings</h1>' +
        '<p>Interruptions are the top productivity killer for developers, in my mind. Developers can’t easily go back to where they were right before an interruption. They need to get into the mindset for development and then slowly trace back to where they left off. This can easily take more than 30 minutes. And the more interruptions, the more frustration, the less quality work, the more bugs — and it goes on.</p>' +
        '<p>What about meetings? The only difference between a meeting and an interruption is that a meeting is a planned interruption, which makes it even worse. Developers can’t progress on a task if they know that they will have an interruption while working on it. So if they have a meeting in one or two hours, they will not be able to progress on anything, as most engineering tasks take more time.</p>' +
        '<h1>2) Micro-management</h1>' +
        '<p>Of the different types of managers, micro-managers might be the worst in terms of the developers’ productivity. Sure, micro-managers tend to have more meetings and unplanned interruptions. But it’s not only that. They show a lack of trust, and by doing so, you feel they constantly undermine your skills and your ability to get things done. Any motivation a developer had between interruptions will be just gone at that point. The impact goes beyond productivity. Micro-managers might be the first reason for developers to leave, or at the very least, to change teams.</p>' +
        '<h1>3) Vagueness</h1>' +
        '<p>There are many ways to illustrate vagueness. Bug reports like “It’s broken, fix it!” don’t have enough information for developers to work off of. By the way, having a bug report template can help in that case.</p>' +
        '<h1>4) Seagull Management</h1>' +
        '<p>Have you ever heard of it? It happens when managers are totally uninvolved in the work, but… they just swoop down once in a while to shit all over everything. “This is wrong, and this, and this looks bad,” etc., before flying away again. I have to admit I loved the image, but unfortunately, this happens more often than we would like it to. This behavior is deeply frustrating to developers; they won’t be able to get back in the zone in the next few hours, and sometimes not even for days.</p>' +
        '<h1>5) Credit Greediness</h1>' +
        '<p>Have you ever had a manager or other developer who took all the credit for the work you have done in the past weeks? Developers value competence above all. Taking the credit for someone else is taking the other’s competence for yourself and removing it from him or her. This is pretty high up on my list, as I feel it creates so much tension that it just destroys the whole developers’ productivity for quite a while.</p>' +
        '<p>Not surprisingly, developers feel that those deadlines are unreasonable and arbitrarily tight; this creates tension and an inability to focus.</p>' +
        '<p>How are all those things unique to developers?</p>' +
        '<p>If you look at all 12 things, they are actually pretty common to most other project-based jobs. It’s just that the impact of each of these is even more important for developers, as they need deep focus to progress on their tasks.</p>',
      desc: 'A lot of articles address the role of tech leads and engineering managers. One common theme we often come across is how to increase a team’s productivity. But before you focus your energy trying to increase their productivity, you might first want to consider what’s destroying it, to have a sound base on which you can build. Unfortunately, even though Peopleware was published almost 30 years ago, we see lots of teams suffering from huge productivity loss in some (negatively) remarkable ways!',
      source: 'https://medium.com/hackernoon/top-12-things-that-destroy-developer-productivity-2ddf0abc190',
      created_at: 'Oct 09, 2019'
    },
    {
      id: 5,
      title: 'These four “clean code” tips will dramatically improve your engineering team’s productivity',
      slug: 'these-four-clean-code-tips-will-dramatically-improve-your-engineering-teams-productivity',
      writer: 'Jonathan Fulton',
      category: 1,
      imageUrl: 'https://miro.medium.com/max/500/1*J2mKSLBEp_jUbMtOWXTTjQ.png',
      content: '<p>A few years ago at VideoBlocks we had a major code quality problem: “spaghetti” logic in most files, tons of duplication, no tests and more. Writing new features and even minor bug fixes required a couple of Tums at best and entire bottles of Pepto-Bismol and Scotch far too often. Our WTFs per minute were sky-high.</p>' +
        '<p>Today, the overall quality of our codebases are significantly better thanks in large part to a deliberate effort to improve code quality. A couple ago when we identified the problem, we read Robert Martin’s Clean Code as a team and did our best to implement his recommendations and even introduced “clean code” as a core cultural tenant for the engineering team. I highly recommend doing both as you start scaling. Implementing “clean code” practices appropriately will double productivity in the long run (at a bare minimum) and significantly improve moral on the engineering team. Who wants to be in the room on the right given the choice?</p>' +
        '<p>Out of all the ideas we implemented from Clean Code and other sources, five provided at least 80% of the gains in productivity and team happiness.</p>' +
        '<ol><li><strong>“If it isn’t tested, it’s broken”</strong>' +
        'Write lots of tests, especially unit tests, or you’ll regret it.</li>' +
        '<li><strong>Choose meaningful names</strong>' +
        'Use short and precise names for variables, classes, and functions.</li>' +
        '<li><strong>Classes and functions should be small and obey the Single Responsibility Principle (SRP)</strong>' +
        'Functions should be no more than 4 lines and classes no more than 100 lines. Yep, you read that correctly. They should also do one and only one thing.</li>' +
        '<li><strong>Functions should have no side effects</strong>' +
        'Side effects (e.g., modifying an input argument) are evil. Make sure not to have them in your code. Specify this explicitly in the function contracts where possible (e.g., pass in native types or objects that have no setters)</li></ol>' +
        '<p>Let’s walk through each one in detail so you can understand and start applying them in your day-to-day life on an engineering team.</p>' +
        '<h1>1. “If it isn’t tested, it’s broken”</h1>' +
        '<p>I started regularly repeating this sentence to our engineers as we encountered bugs that should’ve been caught by (nonexistent) tests. You too will prove the quote true again and again unless you build a culture of testing. Write a lot of tests, especially unit tests. Think very hard about integration tests and make sure you have a sufficient number in place to cover your core business functionality. Remember, if there’s not test coverage for a piece of code you’ll likely break it in the future without realizing it until your customers find the bug.</p>' +
        '<p>Repeat “if it isn’t tested, it’s broken” to your team over and over until the message sinks in. Practice what you preach, whether you’re a brand new software engineer straight out of school or a grizzled veteran.</p>' +
        '<h1>2. Choose meaningful names</h1>' +
        '<p>You may have heard this quote before and it couldn’t be more relevant to your day-to-day life on an engineering team. If you and your team aren’t good at naming things in your code, it will become an unmaintainable nightmare and you won’t get anything done. You’ll lose your best developers and your company will soon go out of business.</p>' +
        '<p>Seriously though, friends don’t let friends use bad variable names like data, foobar, or myNumber and they most certainly don’t let them name classes things like SomethingManager. Make sure your names are short and precise, but when in conflict favor precision. Strongly optimize around developer efficiency and make it easy to find files via “find by name” IDE shortcuts. Enforce good naming stringently with code reviews.</p>' +
        '<h1>3. Classes and functions should be small and obey the Single Responsibility Principle (SRP)</h1>' +
        '<p>What does “small” mean for functions? No more than 4 lines of code. Yep, you read that correctly, 4 lines. You’re probably closing the tab right now but you really shouldn’t. It seems somewhat arbitrary and small and you’ve probably never written code like that in your life. However, 4-line functions force you to think hard and pick a lot of really good names for sub-functions that make your code self-documenting. Additionally, they mean you can’t use nested IF statements that force you to do mental gymnastics to understand all the code paths.</p>' +
        '<p>Let’s walk through an example together. Node has an npm module called “build-url” which is used for doing exactly what it’s name suggests: it builds URLs. You can find the link to the source file we’re going to look at here. Below is the relevant code.</p>' +
        '<p>How do you write code like this? I personally find it easiest to write the list of steps down that you need to accomplish the task you’re hoping to do. Each of these steps might be a good candidate for a sub/helper function. For instance, we could describe the buildUrl function as follows:</p>' +
        '<ol><li>Initialize our base url and options</li>' +
        '<li>Add the path (if any)</li>' +
        '<li>Add the query parameters (if any)</li>' +
        '<li>Add the hash (if any)</li></ol>',
      desc: 'A few years ago at VideoBlocks we had a major code quality problem: “spaghetti” logic in most files, tons of duplication, no tests and more. Writing new features and even minor bug fixes required a couple of Tums at best and entire bottles of Pepto-Bismol and Scotch far too often. Our WTFs per minute were sky-high.',
      source: 'https://engineering.videoblocks.com/these-four-clean-code-tips-will-dramatically-improve-your-engineering-teams-productivity-b5bd121dd150',
      created_at: 'Jun 16, 2017'
    }
  ],
  categories: [
    {
      id: 1,
      name: 'Productivity'
    },
    {
      id: 2,
      name: 'UI/UX'
    },
    {
      id: 3,
      name: 'Javascript'
    }
  ]
}
export default data