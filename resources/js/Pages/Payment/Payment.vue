<template>

    <div class="payments_wrapper">
        <Payments />
        <OrdersList/>
    </div>

</template>

<script>
    import OrdersList from "@/Shared/Orders/OrdersList"
    import Payments from "@/Shared/Payment/Payments"

    export default {
        name: "Payment",
        components: {
            OrdersList,
            Payments
        }
    }
</script>
