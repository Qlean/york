```js
import { View } from '@qlean/york-web';
const slugs = [
  'facebook',
  'messenger',
  'telegram',
  'viber',
  'vk',
  'instagram',
];

;<>
  <Example.Showcase withVerticalPadding>
    {slugs.map(slug => (
      <View key={slug}>
        <Example.ShowcaseItem>
          <SocialButton slug={slug} size="s" href="" backdropColor="white"/>
        </Example.ShowcaseItem>
        <Example.ShowcaseItem>
          <SocialButton slug={slug} size="m" href="" backdropColor="white"/>
        </Example.ShowcaseItem>
      </View>
    ))}
  </Example.Showcase>
  <Example.Showcase withVerticalPadding backgroundColor="coal">
    {slugs.map(slug => (
      <View key={slug}>
        <Example.ShowcaseItem>
          <SocialButton slug={slug} size="s" href="" backdropColor="dark"/>
        </Example.ShowcaseItem>
        <Example.ShowcaseItem>
          <SocialButton slug={slug} size="m" href="" backdropColor="dark"/>
        </Example.ShowcaseItem>
      </View>
    ))}
  </Example.Showcase>
</>
```
