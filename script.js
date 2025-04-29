import { supabase } from './supabase.js'

document.addEventListener("DOMContentLoaded", async () => {
  // Initialize Lucide icons
  const lucide = window.lucide
  lucide.createIcons()

  // ✅ Check login status
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    console.warn("User not logged in")
    // Removed forced redirect to allow users to see the index page
    // window.location.href = "/auth.html?mode=login"
    // return
}
else {
    console.log("User logged in:", user.email)
  }

  // ✅ Onboarding Form Submission
  const form = document.querySelector('.onboarding-form')
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault()

      const name = document.getElementById('name').value
      const age = parseInt(document.getElementById('age').value)
      const gender = document.getElementById('gender').value
      const skinType = document.querySelector('input[name="skin-type"]:checked')?.value
      const concerns = Array.from(
        document.querySelectorAll('input[name="concerns"]:checked')
      ).map((c) => c.value)

      if (!user) {
        alert("Please login before submitting the form.")
        return
      }

      const { error } = await supabase.from('profiles').upsert({
        id: user.id,
        name,
        age,
        gender,
        skin_type: skinType,
        concerns
      })

      if (error) {
        alert("Failed to save profile.")
        console.error(error)
      } else {
        alert("Profile saved!")
        window.location.href = "/dashboard.html"
      }
    })
  }

  // 🧭 Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
      const icon = mobileMenuButton.querySelector("i")
      if (icon) {
        icon.setAttribute("data-lucide", mobileMenu.classList.contains("active") ? "x" : "menu")
        lucide.createIcons()
      }
    })
  }

  // 🗂️ Tab Logic
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab")
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))
      button.classList.add("active")
      document.getElementById(`${tabId}-tab`)?.classList.add("active")
    })
  })

  // ⭐ Hover Animation
  document.querySelectorAll(".stars i").forEach((star) => {
    star.addEventListener("mouseenter", () => star.style.transform = "scale(1.2)")
    star.addEventListener("mouseleave", () => star.style.transform = "scale(1)")
  })

  // 🎯 Smooth Anchor Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
      targetElement?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  })

  // 💬 Chat Bubble
  const chatBubble = document.querySelector(".chat-bubble-fixed button")
  if (chatBubble) {
    chatBubble.addEventListener("mouseenter", () => chatBubble.style.transform = "scale(1.1)")
    chatBubble.addEventListener("mouseleave", () => chatBubble.style.transform = "scale(1)")
    chatBubble.addEventListener("click", () => alert("Chat assistant would open here. This is a demo."))
  }

  // 📦 Card Hover Effects
  document.querySelectorAll(".card, .ingredient-card, .product-card, .widget-card")
    .forEach((card) => {
      card.addEventListener("mouseenter", () => card.style.transform = "translateY(-5px)")
      card.addEventListener("mouseleave", () => card.style.transform = "translateY(0)")
    })
})
