<template>
<div class="signup container">
    <form class="card-panel" @submit.prevent="signup">
        <h2 class="center deep-purple-text">Signup</h2>
        <div class="field">
            <label for="email">Email :</label>
            <input type="email" name="email" v-model="email">
        </div>
        <div class="field">
            <label for="password">Password :</label>
            <input type="password" name="password" v-model="password">
        </div>
        <div class="field">
            <label for="alias">Alias :</label>
            <input type="text" name="alias" v-model="alias">
        </div>
        <p class="red-text center" v-if="feedback"> {{ feedback }} </p>
        <div class="center field">
            <button class="btn deep-purple">SIGNUP</button>
        </div>
    </form>
</div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
import functions from 'firebase/functions'

export default {
    name: 'Signup',
    data() {
        return {
            email: null,
            password: null,
            alias: null,
            feedback: null,
            slug: null
        }
    },
    methods: {
        signup() {
            if (this.alias && this.email && this.password) {
                this.slug = slugify(this.alias, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                let checkAlias = firebase.functions().httpsCallable('checkAlias')
                checkAlias({
                    slug: this.slug
                }).then(result => {
                    console.log(result)
                    if (!result.data.unique) {
                        this.feedback = 'This alias already exists'
                    } else {
                        firebase.auth()
                            .createUserWithEmailAndPassword(this.email, this.password)
                            .then(cred => {
                                db.collection('users').doc(this.slug).set({
                                    alias: this.alias,
                                    geolocation: null,
                                    user_id: cred.user.uid
                                })
                            })
                            .then(_ => {
                                this.$router.push({
                                    name: 'GMap'
                                })
                            })
                            .catch(err => {
                                this.feedback = err.message
                            })
                    }
                })
            } else {
                this.feedback = 'You must enter all fieds'
            }
        }
    }
}
</script>

<style>
.signup {
    max-width: 400px;
    margin-top: 60px;
}

.signup h2 {
    font-size: 2.4em;
}

.signup .field {
    margin-bottom: 16px;
}
</style>
