var app = new Vue(
    {
        el: '#root',
        data: {
            resultResponse: ''
        },
        methods: {

        },
        mounted () {

            axios
                .get( 'https://flynn.boolean.careers/exercises/api/random/mail' )
                .then(( response ) => {
                    console.log(response)

                    const result = response.data;
                    console.log( result )
                    this.resultResponse = result.response;
                    console.log( this.resultResponse )

                });
                
        }
    }
)
