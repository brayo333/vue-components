<script setup>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { Icon } from "@iconify/vue";

let message= "Value in v-model";

const doSomething = () => {
  alert("Hello there!");
};
</script>

<template>
  <div class="w-full p-5 flex flex-col">
    <div class="md:w-1/2 w-full">
      <label>Slightly rounded</label>
      <Input
        class=""
        type="text"
        option="slightlyRounded"
        backgroundColor="transparent"
        color="var(--appColor-black)"
        placeholder="Hello there"
        border="1px solid var(--appColor-main)"
        v-model="message"
      />
    </div>

    <div class="md:w-1/2 w-full pt-3">
      <label>Line</label>

      <Input
        name="input-with-line"
        class=""
        type="email"
        option="line"
        backgroundColor="transparent"
        color="var(--appColor-black)"
        placeholder="Hello there"
      />
    </div>

    <div class="pt-5">
      <Button
        type="button"
        class=""
        option="slightlyRounded"
        label="Get started"
        backgroundColor="var(--appColor-main)"
        color="var(--appColor-light)"
        @clicked="doSomething"
      />
    </div>

    <div class="pt-5">
      <Button
        type="button"
        class=""
        option="circle"
        backgroundColor="var(--appColor-main)"
        color="var(--appColor-light)"
        @clicked="doSomething"
        hasIcon
        iconBtn
        ><template #icon
          ><Icon
            class=""
            icon="mdi:bell-notification"
            height="24"
            color="var(--appColor-light)" /></template
      ></Button>
    </div>

    <div class="pt-5">
      <Button
        type="button"
        class=""
        option="box"
        label="Log out"
        backgroundColor="var(--appColor-dark)"
        color="var(--appColor-light)"
        @clicked="doSomething"
        hasIcon
        ><template #icon
          ><Icon
            class=""
            icon="material-symbols:logout-rounded"
            height="24"
            color="inherit" /></template
      ></Button>
    </div>
  </div>
</template>

<style></style>
