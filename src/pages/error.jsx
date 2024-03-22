import { useRouteError } from 'react-router-dom'

function ErrorPage () {
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <h2>Ooops</h2>
      <p>Something went wrong</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
