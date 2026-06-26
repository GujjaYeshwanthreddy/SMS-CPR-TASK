import React from "react";
import { Routes, Route } from "react-router-dom";

import MainContent from "../components/layout/MainContent";

import HomePage from "../Pages/Home/HomePage";

import DashboardPage from "../Pages/Dashboard/DashboardPage";

import SendMessagePage from "../Pages/Campaigns/SendMessagePage";
import TwoWayMessagingPage from "../Pages/Campaigns/TwoWayMessagingPage";
import AutorespondersPage from "../Pages/Campaigns/AutorespondersPage";
import ScheduleCampaignsPage from "../Pages/Campaigns/ScheduleCampaignsPage";

import MediaLibraryPage from "../Pages/Tools/MediaLibraryPage";
import UrlShortenerPage from "../Pages/Tools/UrlShortenerPage";
import MessageTemplatePages from "../Pages/Tools/MessageTemplatePages";
import IntegrationsPage from "../Pages/Tools/IntegrationsPage";

import VirtualNumbersPage from "../Pages/Numbers/VirtualNumbersPage";
import SubscribedPage from "../Pages/Numbers/SubscribedPage";

import ContactGroupsPage from "../Pages/Contacts/ContactGroupsPage";
import SegmentsPage from "../Pages/Contacts/SegmentsPage";
import CustomFieldsPage from "../Pages/Contacts/CustomFieldsPage";

import CampaignStatusPage from "../Pages/Reports/CampaignStatusPage";
import InboxPage from "../Pages/Reports/InboxPage";

import HttpApiPage from "../Pages/Api/HttpApiPage";

import LivechatPage from "../Pages/LiveChat/LivechatPage";

const AppRoutes = ({ mainMenuOpen }) => {
  return (

    <Routes>

      <Route path="/" element={<MainContent mainMenuOpen={mainMenuOpen} />}>
        {/* Home routes */}
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />


        <Route path="campaigns/send-message" element={<SendMessagePage />} />
        <Route
          path="campaigns/two-way-messaging"
          element={<TwoWayMessagingPage />}
        />
        <Route
          path="campaigns/autoresponders"
          element={<AutorespondersPage />}
        />
        <Route
          path="campaigns/schedule-campaigns"
          element={<ScheduleCampaignsPage />}
        />

        <Route path="tools/media-library" element={<MediaLibraryPage />} />
        <Route path="tools/url-shortener" element={<UrlShortenerPage />} />
        <Route
          path="tools/message-templates"
          element={<MessageTemplatePages />}
        />
        <Route path="tools/integrations" element={<IntegrationsPage />} />

        <Route
          path="numbers/virtual-numbers"
          element={<VirtualNumbersPage />}
        />
        <Route path="numbers/subscribed" element={<SubscribedPage />} />


        <Route
          path="contacts/contact-groups"
          element={<ContactGroupsPage />}
        />
        <Route path="contacts/segments" element={<SegmentsPage />} />
        <Route
          path="contacts/custom-fields"
          element={<CustomFieldsPage />}
        />

        <Route
          path="reports/campaign-status"
          element={<CampaignStatusPage />}
        />
        <Route path="reports/inbox" element={<InboxPage />} />


        <Route path="api/http-api" element={<HttpApiPage />} />


        <Route path="livechat" element={<LivechatPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;