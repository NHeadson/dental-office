<script lang="ts" setup>
defineOptions({
  name: 'HomePage',
})

const services = [
  { title: 'Preventative Care', description: 'Cleanings, checkups, and oral cancer screening.' },
  { title: 'Cosmetic Dentistry', description: 'Teeth whitening and smile makeovers.' },
  { title: 'Crowns & Bridges', description: 'Restore damaged or missing teeth.' },
  { title: 'Implants', description: 'Permanent, natural-looking tooth replacement.' },
  { title: 'Root Canals', description: 'Relieve pain and save your natural tooth.' },
  { title: 'Dentures & Partials', description: 'Custom-fit full and partial dentures.' },
].map((s, i) => ({ ...s, index: String(i + 1).padStart(2, '0') }))

const perks = [
  'Same-day emergency care',
  '10% discount for uninsured patients',
  'Most major PPO insurance accepted',
  'Family-owned for 50+ years',
]

const mapEmbedUrl =
  'https://www.google.com/maps?q=12720+W+North+Ave+Bldg+B+Brookfield+WI+53005&output=embed'

const headerEl = ref<HTMLElement | null>(null)
const headerHeight = ref(90)
const headerHidden = ref(false)
const mobileMenuOpen = ref(false)
let lastScrollY = 0

function updateHeaderHeight() {
  headerHeight.value = headerEl.value?.offsetHeight ?? headerHeight.value
}

function handleResize() {
  updateHeaderHeight()
  if (window.innerWidth > 900) {
    mobileMenuOpen.value = false
  }
}

function handleScroll() {
  if (mobileMenuOpen.value) return
  const currentY = window.scrollY
  const scrollingDown = currentY > lastScrollY
  const pastHeader = currentY > headerHeight.value
  headerHidden.value = scrollingDown && pastHeader
  lastScrollY = currentY
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

onMounted(() => {
  updateHeaderHeight()
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="site">
    <!-- HEADER -->
    <header ref="headerEl" class="header" :class="{ 'header--hidden': headerHidden }">
      <a href="#" class="logo logo-link" @click.prevent="scrollToTop">
        <span class="logo-name">Binninger</span>
        <span class="logo-sub">Family Dentistry</span>
      </a>
      <nav class="nav">
        <a href="#services" class="nav-link nav-section-link">Services</a>
        <a href="#approach" class="nav-link nav-section-link">Approach</a>
        <a href="#family" class="nav-link nav-section-link">Family</a>
        <a href="tel:2627851499" class="nav-link nav-phone">(262) 785-1499</a>
        <a href="tel:2627851499" class="nav-cta">Call to Schedule</a>
        <button
          type="button"
          class="nav-toggle"
          aria-label="Toggle menu"
          :aria-expanded="mobileMenuOpen"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>
      </nav>
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <a href="#services" class="mobile-menu-link" @click="closeMobileMenu">Services</a>
        <a href="#approach" class="mobile-menu-link" @click="closeMobileMenu">Approach</a>
        <a href="#family" class="mobile-menu-link" @click="closeMobileMenu">Family</a>
        <a href="tel:2627851499" class="mobile-menu-link" @click="closeMobileMenu">(262) 785-1499</a>
      </div>
    </header>
    <div class="header-spacer" :style="{ height: `${headerHeight}px` }" />

    <!-- HERO -->
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Brookfield, Wisconsin</span>
        <h1 class="hero-title">Gentle, family dentistry — the way it should feel.</h1>
        <p class="hero-text">
          Serving Milwaukee-area families for over 50 years. Pain-free visits, same-day
          emergencies, and a team that treats you like one of our own.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-dark">Contact Us</a>
          <a href="tel:2627851499" class="btn btn-outline">Call Now</a>
        </div>
      </div>
      <div class="hero-media">
        <img src="/images/woman-laughing.jpg" alt="Smiling patient" class="hero-img">
        <div class="hero-badge">
          <div class="hero-badge-num">50+</div>
          <div class="hero-badge-text">years caring for Milwaukee-area families</div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="services">
      <div class="services-head">
        <span class="eyebrow">What We Treat</span>
        <h2 class="section-title services-title">Care for every stage of your smile.</h2>
      </div>
      <div class="services-list">
        <div v-for="service in services" :key="service.title" class="service-row">
          <span class="service-index">{{ service.index }}</span>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- APPROACH -->
    <section id="approach" class="approach">
      <div class="approach-inner">
        <div class="approach-media">
          <img src="/images/empty-room.jpg" alt="Treatment room" class="approach-img">
          <div class="approach-accent" />
        </div>
        <div class="approach-copy">
          <span class="eyebrow">Our Approach</span>
          <h2 class="section-title">Comfort-first care.</h2>
          <p class="approach-text">
            We provide local anesthetic at no charge and offer nitrous oxide for anxious
            patients — because a trip to the dentist shouldn't be stressful.
          </p>
          <div class="perks">
            <div v-for="perk in perks" :key="perk" class="perk-row">
              <span class="perk-dot" />
              <span>{{ perk }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAMILY -->
    <section id="family" class="family">
      <div class="family-copy">
        <span class="eyebrow">For Every Generation</span>
        <h2 class="section-title family-title">Dentistry for the whole family.</h2>
        <p class="family-text">
          From your child's first checkup to your own routine cleanings, we've welcomed
          generations of families in the Milwaukee area for over 50 years.
        </p>
        <div class="family-grid">
          <img src="/images/close-smile-1.jpg" alt="Patient smile" class="family-thumb">
          <img src="/images/close-smile-2.jpg" alt="Patient smile" class="family-thumb family-thumb-offset">
          <img src="/images/close-smile-3.jpg" alt="Patient smile" class="family-thumb">
        </div>
      </div>
      <img src="/images/kid-laughing.jpg" alt="Child laughing" class="family-img">
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact">
      <div class="contact-inner">
        <div class="contact-info">
          <span class="eyebrow">Visit Us</span>
          <h2 class="section-title">Get in touch.</h2>
          <p class="contact-line">12720 W North Ave, Bldg. B</p>
          <p class="contact-line contact-line-gap">Brookfield, WI 53005</p>
          <p class="contact-line"><strong>Mon–Thu</strong> — 8:00 AM – 5:00 PM</p>
          <p class="contact-line"><strong>Fri</strong> — 8:00 AM – 12:00 PM (reception only)</p>
          <p class="contact-line contact-line-gap"><strong>Sat–Sun</strong> — Closed</p>
          <a href="tel:2627851499" class="btn btn-dark contact-phone">(262) 785-1499</a>
          <iframe
            :src="mapEmbedUrl"
            title="Map to Binninger Family Dentistry, 12720 W North Ave, Bldg. B, Brookfield, WI"
            width="100%"
            height="260"
            class="contact-map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div class="contact-card">
          <h3 class="contact-card-title">Send Us a Message</h3>
          <ContactForm />
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <span class="footer-text">© {{ new Date().getFullYear() }} Binninger Family Dentistry. All rights reserved.</span>
    </footer>
  </div>
</template>

<style scoped>
.site {
  font-family: 'Karla', sans-serif;
  color: #16323A;
  background: #FFFFFF;
  line-height: 1.5;
}

a {
  color: oklch(45% 0.09 40);
  text-decoration: none;
}

a:hover {
  color: oklch(38% 0.11 40);
}

.eyebrow {
  display: block;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #1B6E82;
}

.section-title {
  font-family: 'Newsreader', serif;
  font-weight: 500;
  font-size: 38px;
  margin: 18px 0 0;
  line-height: 1.15;
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  font-weight: 600;
  font-size: 15px;
  border-radius: 2px;
  text-align: center;
}

.btn-dark {
  background: #16323A;
  color: #FFFFFF;
}

.btn-dark:hover {
  color: #FFFFFF;
  background: #0F2429;
}

.btn-outline {
  border: 1px solid #16323A;
  color: #16323A;
}

.btn-outline:hover {
  color: #16323A;
  background: rgba(22, 50, 58, 0.05);
}

/* HEADER */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 56px;
  background: #FFFFFF;
  border-bottom: 1px solid #DCE9EC;
  flex-wrap: wrap;
  gap: 16px;
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.header--hidden {
  transform: translateY(-100%);
}

.header-spacer {
  flex-shrink: 0;
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-link {
  color: #16323A;
}

.logo-link:hover {
  color: #16323A;
}

.logo-name {
  font-family: 'Newsreader', serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.logo-sub {
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #2E9BB5;
}

.nav {
  display: flex;
  align-items: center;
  gap: 36px;
  flex-wrap: wrap;
  justify-content: flex-end;
  row-gap: 8px;
}

.nav-link {
  font-size: 15px;
  color: #16323A;
}

.nav-cta {
  background: #1B6E82;
  color: #fff;
  padding: 11px 22px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 14px;
}

.nav-cta:hover {
  color: #fff;
  background: #16323A;
}

.nav-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 6px;
  background: none;
  border: none;
  color: #16323A;
  cursor: pointer;
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-bottom: 1px solid #DCE9EC;
  padding: 4px 24px 12px;
  box-shadow: 0 16px 24px rgba(22, 50, 58, 0.08);
}

.mobile-menu-link {
  padding: 14px 0;
  font-size: 16px;
  color: #16323A;
  border-top: 1px solid #EAF4F6;
}

.mobile-menu-link:first-child {
  border-top: none;
}

/* HERO */
.hero {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  align-items: stretch;
  min-height: 640px;
}

.hero-copy {
  padding: 90px 40px 90px 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
}

.hero-copy .eyebrow {
  margin-bottom: 22px;
}

.hero-title {
  font-family: 'Newsreader', serif;
  font-weight: 500;
  font-size: 58px;
  line-height: 1.08;
  margin: 0 0 26px;
  letter-spacing: -0.5px;
}

.hero-text {
  font-size: 17px;
  color: #3F5C63;
  max-width: 460px;
  margin: 0 0 36px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-media {
  position: relative;
}

.hero-img {
  width: 100%;
  height: 100%;
  min-height: 360px;
  object-fit: cover;
  display: block;
}

.hero-badge {
  position: absolute;
  bottom: 36px;
  left: -56px;
  background: #FFFFFF;
  border: 1px solid #D7E6E9;
  padding: 22px 28px;
  max-width: 230px;
  box-shadow: 0 12px 30px rgba(22, 50, 58, 0.12);
}

.hero-badge-num {
  font-family: 'Newsreader', serif;
  font-size: 34px;
  font-weight: 600;
  color: #1B6E82;
  line-height: 1;
}

.hero-badge-text {
  font-size: 13px;
  color: #3F5C63;
  margin-top: 6px;
}

/* SERVICES */
.services {
  padding: 150px 56px 110px;
  max-width: 1180px;
  margin: 0 auto;
}

.services-head {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 60px;
  margin-bottom: 64px;
}

.services-head .eyebrow {
  align-self: start;
}

.services-title {
  margin-top: 0;
  max-width: 520px;
}

.service-row {
  display: grid;
  grid-template-columns: 90px 1fr 1.4fr;
  gap: 32px;
  align-items: baseline;
  padding: 32px 0;
  border-top: 1px solid #D7E6E9;
}

.service-index {
  font-family: 'Newsreader', serif;
  font-size: 26px;
  color: #9DB8BD;
}

.service-title {
  font-family: 'Newsreader', serif;
  font-weight: 500;
  font-size: 22px;
  margin: 0;
}

.service-desc {
  font-size: 15px;
  color: #3F5C63;
  margin: 0;
}

/* APPROACH */
.approach {
  background: #EAF4F6;
  padding: 120px 56px;
}

.approach-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1180px;
  margin: 0 auto;
  align-items: center;
}

.approach-media {
  position: relative;
}

.approach-img {
  width: 100%;
  height: 460px;
  object-fit: cover;
  display: block;
}

.approach-accent {
  position: absolute;
  top: -28px;
  right: -28px;
  width: 120px;
  height: 120px;
  background: #1B6E82;
  z-index: -1;
}

.approach-text {
  font-size: 16px;
  color: #3F5C63;
  margin: 22px 0 32px;
  max-width: 440px;
}

.perks {
  display: flex;
  flex-direction: column;
}

.perk-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 14px 0;
  border-top: 1px solid #CFE1E5;
}

.perk-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #1B6E82;
  flex-shrink: 0;
  transform: translateY(-2px);
}

/* FAMILY */
.family {
  padding: 130px 56px;
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 64px;
  align-items: center;
}

.family-title {
  margin-top: 18px;
}

.family-text {
  font-size: 16px;
  color: #3F5C63;
  margin: 24px 0 40px;
  max-width: 460px;
}

.family-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-width: 420px;
}

.family-thumb {
  width: 100%;
  height: 110px;
  object-fit: cover;
  display: block;
}

.family-thumb-offset {
  margin-top: 22px;
}

.family-img {
  width: 100%;
  height: 560px;
  object-fit: cover;
  display: block;
}

/* CONTACT */
.contact {
  background: #EAF4F6;
  padding: 130px 56px;
}

.contact-inner {
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 80px;
  max-width: 1180px;
  margin: 0 auto;
}

.contact-line {
  font-size: 15px;
  margin: 0 0 4px;
}

.contact-line-gap {
  margin-bottom: 24px;
}

.contact-phone {
  margin: 8px 0 36px;
}

.contact-map {
  border: 0;
  display: block;
  filter: grayscale(0.2) contrast(1.05);
}

.contact-card {
  background: #FFFFFF;
  padding: 44px;
  border: 1px solid #D7E6E9;
}

.contact-card-title {
  font-family: 'Newsreader', serif;
  font-weight: 500;
  font-size: 24px;
  margin: 0 0 26px;
}

/* FOOTER */
.footer {
  padding: 26px 56px;
  text-align: center;
  border-top: 1px solid #DCE9EC;
}

.footer-text {
  font-size: 13px;
  color: #5C7A80;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .header,
  .hero-copy,
  .services,
  .approach,
  .family,
  .contact,
  .footer {
    padding-left: 32px;
    padding-right: 32px;
  }

  .hero-title {
    font-size: 44px;
  }
}

@media (max-width: 900px) {
  .nav-section-link,
  .nav-phone {
    display: none;
  }

  .nav-toggle {
    display: inline-flex;
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: unset;
  }

  .hero-copy {
    padding-top: 56px;
    padding-bottom: 40px;
    max-width: none;
  }

  .hero-media {
    min-height: 320px;
  }

  .hero-badge {
    left: 24px;
  }

  .services-head,
  .approach-inner,
  .family,
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .service-row {
    grid-template-columns: 48px 1fr;
  }

  .service-desc {
    grid-column: 1 / -1;
  }

  .family-img {
    height: 320px;
  }

  .approach-accent {
    display: none;
  }
}

@media (max-width: 600px) {
  .header,
  .hero-copy,
  .services,
  .approach,
  .family,
  .contact,
  .footer {
    padding-left: 20px;
    padding-right: 20px;
  }

  .hero-title {
    font-size: 34px;
  }

  .hero-actions {
    flex-direction: column;
  }
}

@media (max-width: 400px) {
  .header {
    padding-left: 16px;
    padding-right: 16px;
    gap: 8px;
  }

  .logo-name {
    font-size: 19px;
  }

  .nav {
    gap: 8px;
  }

  .nav-cta {
    padding: 9px 12px;
    font-size: 12px;
  }

  .nav-toggle {
    padding: 4px;
  }

  .hero-copy,
  .services,
  .approach,
  .family,
  .contact,
  .footer {
    padding-left: 16px;
    padding-right: 16px;
  }

  .hero-title {
    font-size: 28px;
  }

  .hero-badge {
    padding: 16px 20px;
    max-width: 190px;
  }

  .hero-badge-num {
    font-size: 28px;
  }

  .service-row {
    gap: 16px;
    padding: 24px 0;
  }

  .family-thumb {
    height: 88px;
  }

  .family-img {
    height: 260px;
  }

  .contact-card {
    padding: 28px 20px;
  }
}
</style>
