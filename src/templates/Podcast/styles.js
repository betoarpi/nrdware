import styled from 'styled-components'

export const PodcastSection = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  @media screen and (max-width: 767px) {
    max-width: 480px;
  }
`

export const PodcastHeader = styled.header`
  align-items: center;
  background: var(--color-primary-lighter);
  box-shadow:  -20px 20px 60px #c9ccc6, 
              20px -20px 60px #ffffff;
  display: grid;
  gap:2rem;
  grid-template-columns: 440px 1fr;
  margin-bottom: 2rem;
  padding: 0 1.5rem 0 0;

  .cover {
    align-self: start;
    transition: all 0.25s ease-in-out;
    &:hover {
      transform: scale(1.025);
    }
  }

  figure {
    margin:0;
    overflow: hidden;
  }

  > div {
    padding:1.5rem 0;
    > a {
      text-decoration: none;
    }
    > h1 {
      color: var(--color-default);
      font-family: 'silkablack';
      margin-bottom:0.5rem;
      text-transform: uppercase;
    }
    .date {
      font-family: 'silkablack';
    }
  }

  @media screen and (max-width: 1023px) {
    grid-template-columns: 300px 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto 2rem;
    padding:0;
    > div {
      padding: 1.5rem;
    }
  }
`

export const ShowNotes = styled.ul`
  margin:0;
  padding:0;
  
  li {
    list-style: none;
  }

  .show-note {
    background: var(--color-primary-lighter);
    box-shadow:  -0.05rem 0.05rem 0.35rem #BFC9B1;
    margin-bottom: 0.5rem;
    padding: 1rem 0.5rem;
    &__title {
      display: grid;
      gap:1rem;
      grid-template-columns: 65px auto 1fr 30px;
      margin-bottom: 0;
      position: relative;
      button {
        appearance: none;
        background: none;
        border:none;
        display: grid;
        font-size:1rem;
        grid-column: 4 / 5;
        grid-row: 1 / 2;
        justify-content: center;
        outline: none;
        &:before {
          content: ' ';
          height: 100%;
          left:0;
          position: absolute;
          top:0;
          width: 100%;
        }
        &:hover {
          cursor: pointer;
        }
      }
      @media screen and (max-width: 479px) {
        grid-template-columns: max-content 1fr 30px;
        grid-template-rows: max-content max-content;
        > * {
          grid-column: initial !important;
          grid-row: 1 / 2 !important;
          &.show-note__topic {
            grid-row: 2 / 3 !important;
            grid-column: 1 / 4 !important;
          }
          &.show-note__time {
            text-align: left;
          }
        }
      }
    }
    &__title + div {
      border-top: 2px solid transparent;
      direction: rtl;
      height:0;
      opacity:0;
      overflow:hidden;
      padding: 0 2rem;
      transition: all 0.25s ease-in-out;
      > * {
        direction: ltr;
      }
      > h3 {
        font-family: 'silkablack';
      }
      ul + p {
        margin-bottom: 0.5rem;
      }
      ul {
        direction: initial;
        margin-bottom: 1rem;
        li {
          list-style: disc;
          margin-bottom: 0;
        }
      }
      ol {
        li {
          list-style: decimal-leading-zero;
        }
      }
    }
    &__time {
      font-weight: 700;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      text-align: right;
    }
    &__topic {
      font-family: 'silkablack';
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    &__hashtag {
      color: var(--color-secondary);
      font-weight:700;
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }
    &.active {
      div {
        border-top: 2px solid rgba(0,0,0,0.085);
        height: initial;
        margin: 0.5rem 0 0;
        opacity:1;
        padding: 1.5rem 2rem 0;
        .block-img {
          img {
            display: block;
            margin: 0 auto;
          }
        }
      }
    }
  }
`
