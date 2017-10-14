
import React, { Component } from 'react'
import Moment from 'react-moment'
import Head from 'next/head'
import withPost, { Content } from 'nextein/post'
import DisqusComments from 'react-disqus-comments'

import MainHead from '../components/main-head'
import Navigation from '../components/navigation'
import Tags from '../components/tags'
import withAnalytics from '../components/analytics'

class Post extends Component {

  render () {
    const { post } = this.props
    const { data, content } = post
    const date = data.date
    const background = data.background ? ", 50% url(" + data.background + ")" : "#fff"
    const tags = data.tag ? [].concat(data.tag) : []
    const dataHead = {
      title: data.title,
      description: data.excerpt || "",
      image: data.background ? data.background : (data.category === "jesusfreak") ? "http://lavaldi.com/static/jesusfreak.jpg" : (data.category === "code") ? "http://lavaldi.com/static/frontend.jpg" : null
    };

    return (
      <main>
        <MainHead data={dataHead} />     
        <section className="hero">
          <Navigation />
        </section>
        <section style={
          {
            background: "linear-gradient( rgba(0, 0, 0, .8), rgba(0, 0, 0, .5))" + background + "",
            backgroundSize: "cover",
            margin: "0",
            padding: "2em"
          }
          }>
          <div className="container">
            <div className="content-wrap">
              <h1 className="title is-1" style={styles.title}>{data.title}</h1>
              <span className="tags" style={styles.tags}>
                <Moment locale="es" format="LL" style={styles.moment}>{date}</Moment>
                <Tags tags={tags} />
              </span>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content-wrap">
              <article className="content content-body is-medium">
                <Content {...post}
                  renderers={{
                    p: Paragraph,
                    pre: CodeBlock,
                    code: Code
                  }}
                />
                <hr />
                <p><i>Gracias por leer. Déjame un mensaje por si las dudas</i> 😉</p>
              </article>
              <DisqusComments 
                shortname="lavaldi"
                title={data.title}
              />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default withAnalytics(withPost(Post))

// Renderers -----

const Paragraph = ({ children }) => {
  return (
   <p>
    {children}
   </p>
  )
}

const Code = ({ children, className, ...rest }) => {
  return (
    <code className={className || 'language-js'} {...rest}>
      {children}
    </code>
  )
}

const CodeBlock = ({ children }) => {
  return <pre>{children}</pre>
}

const styles = {
  moment: {
    alignItems: 'center',
    borderRadius: '3px',
    color: '#fff',
    display: 'inline-flex',
    fontStyle: "italic",
    height: '2em',
    justifyContent: 'center',
    lineHeight: '1.5',
    whiteSpace: 'nowrap',
    marginRight: '0.5rem',
    marginBottom: "0.5rem"
  },
  title: {
    color: "#fff",
    margin: "3em auto 0"
  },
  tags: {
    paddingTop: "2rem",
    margin: "0 auto 3em"
  }
};
