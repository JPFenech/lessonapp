<template>
    <div>
        <center>
            <h1>Shopping Cart</h1>
        </center>
        <div id="display-cart" v-for='(lesson, index) in cart' :key="index">
            <!--cart is one elemnt of the displayLessonsCart Array-->
            <h1>{{lesson.SubjectName}}</h1>
            <p>Location: {{lesson.Location}}</p>
            <p>Price: €{{lesson.Price}}</p>
            <p>Availability: {{lesson.Space}}</p>
            <img v-bind:src="lesson.Image" height="320px" width="320px"><br><br>
            <!--This button removes from the cart-->
            <button @click="remove(lesson)">Remove</button>
        </div>
        <div id="checkout-section">
            <!--shows in cart items-->
            <br>
            <h2>Checkout</h2>

            <p>
                <strong>Name:</strong>
                <!--name-->
                <input v-model.trim="name" />
            </p>
             <p>
                <strong>Phone Number:</strong>
                <!--number-->
                <input v-model.trim="Phonenumber" />
            </p>

            <h2>Order Information</h2>
            <p>Name: {{name}}</p>
            <p>Number: {{Phonenumber}}</p>
            <!--Fill both fields for checkout-->
             <button @click="purchase()" v-if="checkCheckout">Checkout</button>
            <p v-show="checkoutMsg" id="msg">         Order Completed!!        </p>
        </div>
    </div>

</template>

<script>
export default {
    name: "Checkoutz",
    props: ['cart'],
    data() {
        return {
            name: "",
            Phonenumber: "",
            checkoutMsg: false,
        };
    },
    methods: {
        remove(lesson) {
            this.$emit("removeFromCart", lesson);
        },
        validateCheckout(name, Phonenumber) {   //Validation
            let regExname = /^[A-Za-z]+$/;
            let regExphoneNumber = /^[\s()+-]*([0-9][\s()+-]*){11,20}$/;
            return regExname.test(name) && regExphoneNumber.test(Phonenumber);         },
        purchase() {
            this.checkoutMsg = true;
             setTimeout(function () {
                location.reload();
            }, 5000);           }
    },
    computed: {
        checkCheckout() { //if validation is complete
            if (!this.validateCheckout(this.name, this.Phonenumber)) {
                return false;   //this will trigger if incorrect details
            } else {
                return true;    //true if validation was successful
            }
        },
    }
};
</script>