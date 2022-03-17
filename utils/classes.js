const classes = {
    section: {
      marginTop: 1,
      marginBottom: 1,
    },
    smallText: {
      fontSize: '15px',
    },
    main: {
      marginTop: 2,
      minHeight: '80vh',
    },
    footer: {
      marginTop: 1,
      textAlign: 'center',
    },
    appbar: {
      backgroundColor: '#203040',
      '& a': {
        color: '#ffffff',
        marginLeft: 1,
      },
    },
    toolbar: {
      justifyContent: 'space-between',
    },
    brand: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      marginLeft: 1
    },
    navbarButton: {
      color: '#ffffff',
      textTransform: 'initial',
    },
    fullWidth: {
      width: '100%',
    },
    sort: {
      marginRight: 1,
    },
    visible: {
      display: 'initial',
    },
    hidden: {
      display: 'none',
    },

    // search
    searchForm: {
      border: '1px solid #ffffff',
      backgroundColor: '#ffffff',
      borderRadius: 1,
    },
    searchInput: {
      paddingLeft: 1,
      color: '#000000',
      '& ::placeholder': {
        color: '#606060',
      },
    },
    searchButton: {
      backgroundColor: '#f8c040',
      padding: 1,
      borderRadius: '0 5px 5px 0',
      '& span': {
        color: '#000000',
      },
    },

    // MAPA
    fullContainer: { height: '100vh' },
    mapInputBox: {
      position: 'absolute',
      display: 'flex',
      left: 0,
      right: 0,
      margin: '10px auto',
      width: 300,
      height: 40,
      '& input': {
        width: 250,
      },
    },
  };
  
  export default classes