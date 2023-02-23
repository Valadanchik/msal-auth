<script setup lang="ts">
import { useMsal } from '../composition-api/useMsal'
import { loginRequest } from '../authConfig'
import { useIsAuthenticated } from "../composition-api/useIsAuthenticated";

const isAuthenticated = useIsAuthenticated();

const { instance } = useMsal();

const loginPopup = () => {
  instance.loginPopup(loginRequest);
}

const loginRedirect = () => {
  instance.loginRedirect(loginRequest);
}

const logout = () => {
  instance.logoutRedirect();
}
</script>

<template>
  <main>
    <template v-if="isAuthenticated">
      <h2>Logged in</h2>
      <button @click="logout">Logout</button>
    </template>
    <template v-else>
      <button @click="loginPopup">Login Popup</button>
      <button @click="loginRedirect">Login Redirect</button>
    </template>
  </main>
</template>
