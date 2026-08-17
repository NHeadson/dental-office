<script lang="ts" setup>
defineOptions({
  name: 'HomePage',
})

const services = [
  { title: 'Preventative Care', icon: 'mdi-tooth-outline', description: 'Cleanings, checkups, and oral cancer screening.' },
  { title: 'Cosmetic Dentistry', icon: 'mdi-emoticon-outline', description: 'Teeth whitening and smile makeovers.' },
  { title: 'Crowns & Bridges', icon: 'mdi-shape-outline', description: 'Restore damaged or missing teeth.' },
  { title: 'Implants', icon: 'mdi-medical-bag', description: 'Permanent, natural-looking tooth replacement.' },
  { title: 'Root Canals', icon: 'mdi-tooth', description: 'Relieve pain and save your natural tooth.' },
  { title: 'Dentures & Partials', icon: 'mdi-account-outline', description: 'Custom-fit full and partial dentures.' },
]

const mapEmbedUrl =
  'https://www.google.com/maps?q=12720+W+North+Ave+Bldg+B+Brookfield+WI+53005&output=embed'
</script>

<template>
  <v-app>
    <!-- HEADER -->
    <v-app-bar color="primary" flat height="80">
      <v-container class="d-flex align-center">
        <div class="text-h6 font-weight-bold text-white">
          Binninger Family Dentistry
        </div>
        <v-spacer />
        <v-btn variant="text" color="white" href="tel:2627851499" class="d-none d-sm-flex">
          <v-icon start icon="mdi-phone" />
          (262) 785-1499
        </v-btn>
        <v-btn color="white" variant="flat" class="text-primary ml-2" href="#contact">
          Contact Us
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <!-- HERO -->
      <v-sheet color="secondary" class="py-16">
        <v-container class="text-center">
          <div class="text-overline text-primary mb-2">Brookfield, WI</div>
          <h1 class="text-h3 font-weight-bold mb-4">
            Gentle, Family Dentistry You Can Trust
          </h1>
          <p class="text-body-1 mx-auto mb-6" style="max-width: 600px;">
            Serving the greater Milwaukee area for over 50 years. Pain-free
            visits, same-day emergencies, and a team that treats you like family.
          </p>
          <v-btn size="large" color="primary" class="mr-3" href="#contact">Contact Us</v-btn>
          <v-btn size="large" variant="outlined" color="primary" href="tel:2627851499">Call Now</v-btn>
        </v-container>
      </v-sheet>

      <!-- SERVICES -->
      <v-container class="py-16">
        <h2 class="text-h4 font-weight-bold text-center mb-10">
          Our Services
        </h2>
        <v-row>
          <v-col
            v-for="service in services"
            :key="service.title"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card variant="outlined" class="pa-4 h-100 service-card">
              <v-icon :icon="service.icon" color="primary" size="36" class="mb-3" />
              <v-card-title class="text-subtitle-1 font-weight-bold px-0">
                {{ service.title }}
              </v-card-title>
              <v-card-text class="px-0 text-body-2">
                {{ service.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- WHY CHOOSE US -->
      <v-sheet color="secondary" class="py-16">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="6">
              <h2 class="text-h4 font-weight-bold mb-4">Comfort-First Care</h2>
              <p class="text-body-1 mb-4">
                We provide local anesthetic at no charge and offer nitrous
                oxide for anxious patients — because a trip to the dentist
                shouldn't be stressful.
              </p>
              <v-list bg-color="transparent">
                <v-list-item prepend-icon="mdi-check-circle" title="Same-day emergency care" />
                <v-list-item prepend-icon="mdi-check-circle" title="10% discount for uninsured patients" />
                <v-list-item prepend-icon="mdi-check-circle" title="Most major PPO insurance accepted" />
                <v-list-item prepend-icon="mdi-check-circle" title="Family-owned for 50+ years" />
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <!-- TODO: swap for a real office/team photo -->
              <v-sheet color="primary" rounded="lg" height="320" class="d-flex align-center justify-center">
                <span class="text-white">[ Office / team photo ]</span>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <!-- CONTACT -->
      <v-container id="contact" class="py-16">
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="text-h5 font-weight-bold mb-4">Get In Touch</h3>
            <p class="mb-1">12720 W North Ave, Bldg. B</p>
            <p class="mb-4">Brookfield, WI 53005</p>
            <p class="mb-1"><strong>Mon–Thu:</strong> 8:00 AM – 5:00 PM</p>
            <p class="mb-1"><strong>Fri:</strong> 8:00 AM – 12:00 PM (reception only)</p>
            <p class="mb-4"><strong>Sat–Sun:</strong> Closed</p>
            <v-btn color="primary" href="tel:2627851499" prepend-icon="mdi-phone" class="mb-6">
              (262) 785-1499
            </v-btn>

            <iframe
              :src="mapEmbedUrl"
              width="100%"
              height="280"
              style="border: 0; border-radius: 8px;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="pa-4">
              <v-card-title class="text-h6 font-weight-bold px-0">Send Us a Message</v-card-title>
              <ContactForm />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- FOOTER -->
    <v-footer color="primary" class="justify-center py-6">
      <span class="text-white text-caption">
        © {{ new Date().getFullYear() }} Binninger Family Dentistry. All rights reserved.
      </span>
    </v-footer>
  </v-app>
</template>

<style scoped>
.service-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}
</style>
