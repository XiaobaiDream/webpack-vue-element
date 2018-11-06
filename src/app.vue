<template>
    <div>
        <my-component></my-component>
        {{message}}
        <div>{{weeks[0].date}}</div>
        <div>{{weeks[0].temperature}}</div>
        <div>{{weeks[0].weather}}</div>
        <div>{{weeks[0].wind}}</div>
        <section v-for="(item,i) in 3" :key="i">
            <span>{{weeks[i+1].date}}</span>
            <span>{{weeks[i+1].temperature}}</span>
            <span>{{weeks[i+1].weather}}</span>
            <span>{{weeks[i+1].wind}}</span>
        </section>
    </div>
</template>
<script>
    const _ = require('lodash');

    export default {
        data () {
            return {
                message: 'Hello World!',
                weeks: [
                    {
                        date: '',
                        temperature: '',
                        weather: '',
                        wind: ''
                    },
                ],
                week: [
                    {
                        date: 1,
                        temperature: 1,
                        weather: 1,
                        wind: 1
                    },
                    {
                        date: 2,
                        temperature: 2,
                        weather: 2,
                        wind: 2
                    },
                    {
                        date: 3,
                        temperature: 3,
                        weather: 3,
                        wind: 3
                    },
                    {
                        date: 4,
                        temperature: 4,
                        weather: 4,
                        wind: 4
                    },
                ],
            }
        },
        beforeCreate () {
            console.log('这是创建前')
            console.log(this.message)
        },
        created () {
            this.weeks = this.week;
            console.log(this._lodash)
            console.log('这是创建后')
            console.log(_.concat([1], 2))
        },
        beforeMount() {

        },
        mounted () {

        },
        beforeUpdate () {

        },
        updated () {

        },
        beforeDestroy () {

        },
        destroyed () {

        }
    }
</script>
<style>

</style>
