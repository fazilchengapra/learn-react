const h1 = React.createElement('div', { id: 'parant' }, [
    React.createElement('div', { id: 'chaild1' },
        [React.createElement('h1', {}, 'I am a h1 tag'), React.createElement('h2', {}, 'I am a h2 tag')]),
    React.createElement('div', { id: 'chaild2' },
        [React.createElement('h1', {}, 'I am a h1 tag'), React.createElement('h2', {}, 'I am a h2 tag')])
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(h1)