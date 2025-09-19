import React from 'react'

type State = {
  hasError: boolean
  error?: Error | null
}

export default class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }
  // @ts-expect-error I dont care
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log the error to an external service here
    // console.error(error, info)
  }

  reset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20 }}>
          <h2>Something went wrong.</h2>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#f8f8f8', padding: 12, borderRadius: 6, color: 'black' }}>{String(this.state.error)}</pre>
          <div style={{ marginTop: 12 }}>
            <button onClick={this.reset} style={{ padding: '8px 12px', borderRadius: 6 }}>
              Reset
            </button>
          </div>
        </div>
      )
    }

    return this.props.children as React.ReactElement
  }
}
