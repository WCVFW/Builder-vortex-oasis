import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section
      class="py-16 px-8 bg-gradient-to-br from-pink-50 via-white to-rose-50"
    >
  <div class="max-w-6xl mx-auto pt-10">
  <div class="text-center max-w-4xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      About
      <span
        class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
        >Women's Foundation</span
      >
    </h1>
    <p class="text-xl text-gray-600 mb-8">
      For over a decade, we've been dedicated to creating opportunities,
      breaking barriers, and empowering women to achieve their dreams and
      transform their communities.
    </p>
  </div>
</div>

    </section>

    <!-- Our Story -->
    <section class="py-16 px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p class="text-gray-600 mb-6">
              In the heart of Chennai, Tamil Nadu, a movement quietly began in 2016, driven by a fundamental belief: every woman deserves a voice. This seed, nurtured by the passion of media professional Mr. Gunalan Lavanyan and his resilient and compassionate wife, Mrs. Oorvasi Gunalan, grew into the We Can Voice for Women Foundation—a beacon of empowerment, equity, and hope.
            </p>
            <p class="text-gray-600 mb-6">
              Formally established in 2019, the Foundation emerged as a grassroots NGO with a bold mission: to dismantle the systemic barriers faced by women in India, particularly those from marginalized and underserved communities. This mission was not about charity; it was about transformation—transformation through education, healthcare, economic opportunity, and advocacy.
            </p>
            <p class="text-gray-600 mb-8">
              Under the banners of Women Enlightenment, Women Enhealthment, and Women Empowerment, the Foundation launched holistic programs targeting the most pressing needs of Indian women. These initiatives promoted literacy among rural girls, raised awareness about menstrual health in slum communities, offered vocational training to unemployed women, and advocated for survivors of domestic violence, effectively becoming a bridge between potential and possibility.
            </p>
            <a
              routerLink="/impact"
              class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              💖 See Our Impact
            </a>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Women working together"
              class="w-full h-96 object-cover rounded-lg shadow-lg border border-pink-100"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="py-16 px-8 bg-pink-50">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Mission -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-200"
            >
              <span class="text-white text-2xl">🎯</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600">
              A society where every woman is educated, healthy, and empowered - free to make informed choices, live with dignity, and shape a future of equality and justice.
            </p>
          </div>

          <!-- Vision -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-200"
            >
              <span class="text-white text-2xl">👁</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-600">
              To empower women and girls from marginalised communities by creating safe, inclusive, and opportunity-rich environments. Through education, healthcare, economic independence, and advocacy, we strive to dismantle systemic barriers and nurture leaders who uplift families, communities, and the nation.
            </p>
          </div>

          <!-- Values -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-200"
            >
              <span class="text-white text-2xl">💖</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p class="text-gray-600">
              Our core values demand fairness and equal access for all women. We empower them with the skills and confidence to make their own choices. We create inclusive spaces that embrace every voice and celebrate diversity. We act with integrity by being honest and responsible in our community efforts. With compassion, we support women empathetically and assertively drive collaboration for lasting change. We cultivate resilience to build strong and determined women.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="py-16 px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our
            <span
              class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Leadership Team</span
            >
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of leaders brings decades of experience in
            advocacy, business, education, and community development.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-white rounded-xl shadow-md p-6 text-center border border-pink-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Mr. Gunalan Lavanyan, Founder & Chairman"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Mr. Gunalan Lavanyan, <br> Founder & Chairman
            </h3>
            <p class="text-pink-600 font-medium mb-3">CEO & Founder</p>
            <p class="text-gray-600 text-sm">
              a passionate advocate for social justice. Since initiating the We Can Voice for Women movement in 2016, he has worked tirelessly to reshape public perceptions and attitudes toward women. His leadership combines creative communication, grassroots mobilisation, and strategic vision.
            </p>
          </div>

          <div
            class="bg-white rounded-xl shadow-md p-6 text-center border border-pink-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src=""
              alt="Mrs. Oorvasi Gunalan, Secretary & Treasurer"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Mrs. Oorvasi Gunalan,<br> Secretary & Treasurer
            </h3>
            <p class="text-pink-600 font-medium mb-3">Director of Programs</p>
            <p class="text-gray-600 text-sm">
              With a strong academic background in mathematics and an unyielding passion for community welfare, Mrs. Oorvasi Gunalan exemplifies compassion and resilience. She has played a pivotal role in shaping the Foundation’s operations and outreach. Her dedication to counselling women, managing programs, and sustaining grassroots engagement makes her an invaluable force behind the organisation’s impact.
            </p>
          </div>

          <div
            class="bg-white rounded-xl shadow-md p-6 text-center border border-pink-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src=""
              alt="Mr. Deepak Radhakrishnan, Head - Advisory Board"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Mr. Deepak Radhakrishnan,<br> Head - Advisory Board
            </h3>
            <p class="text-pink-600 font-medium mb-3">Head of Technology</p>
            <p class="text-gray-600 text-sm">
              He is a seasoned professional, qualified as a Taxation Advocate and CPA (USA), with deep expertise in accounting and taxation. He is passionately committed to uplifting business standards in India, especially among underserved communities. With a visionary mindset, he focuses on nurturing entrepreneurs and empowering women to build sustainable ventures. Deepak believes in transforming potential into professionalism, one business at a time. His mission is to create a generation of confident professionals and change-makers across India.
            </p>
          </div>
          <div
            class="bg-white rounded-xl shadow-md p-6 text-center border border-pink-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src=""
              alt="Prof Mr. A.Md.Abdulkadhar, Advisory Board"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Prof Mr. A.Md.Abdulkadhar, Advisory Board
            </h3>
            <p class="text-pink-600 font-medium mb-3">Head of Technology</p>
            <p class="text-gray-600 text-sm">
              Professor A. Mohamed Abdul Kadhar is a distinguished educationist dedicated to the advancement of women. With a wealth of knowledge, he has authored a compelling array of articles and books that spotlight women winners, achievers, and entrepreneurs. Known for his inspiring and confident speaking style, he serves as a trusted consultant to a variety of educational institutions. His impactful work has been recognised with numerous prestigious awards. Currently, he is playing a pivotal role in shaping the We Can Voice for Women Foundation, offering valuable insights and expertise to empower women's voices and initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="py-16 px-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white"
    >
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Whether through volunteering, donating, or partnering with us, there
          are many ways to be part of our mission to empower women.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            routerLink="/donate"
            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white text-pink-600 rounded-lg hover:bg-pink-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            💖 Donate Now
          </a>
          <a
            routerLink="/contact"
            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  `,
})

export class AboutComponent {}
