import React from "react";
import SimpleLayout from "@flare-react/simple-layout"
import Page from '@flare-react/page'
import Block from '@flare-react/block'
import Column from '@flare-react/column'

export default function FirstPage() {

  return <SimpleLayout
    header = {
      <Block>
        <h1>Flare header.</h1>
      </Block>
    }
    main = {
      <Page>
        <Column number={1}>
          <Block>
            <h1>Hello World</h1>
            <p>This is a perfectly aligned page</p>
          </Block>
          <Block>
            <h1>Hello World</h1>
            <p>This is a perfectly aligned page</p>
          </Block>
          <Block>
            <h1>Hello World</h1>
            <p>This is a perfectly aligned page</p>
          </Block>
        </Column>
      </Page>
    }
    footer = {
      <Block>
        <h2>Flare footer</h2>
      </Block>
    }/>

}