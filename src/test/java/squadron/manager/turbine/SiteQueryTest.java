package squadron.manager.turbine;

import com.graphql.spring.boot.test.GraphQLResponse;
import com.graphql.spring.boot.test.GraphQLTest;
import com.graphql.spring.boot.test.GraphQLTestTemplate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import squadron.manager.turbine.site.Site;
import squadron.manager.turbine.site.SiteService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@GraphQLTest
public class SiteQueryTest extends BaseIntegrationTest {

    @Autowired
    private GraphQLTestTemplate graphQLTestTemplate;

    @MockBean
    private SiteService siteServiceMock;

    @Test
    public void getSiteById() throws Exception {
        Site site = new Site(1L, "DGS-1");
        when(siteServiceMock.getSite(any())).thenReturn(site);

        GraphQLResponse response = graphQLTestTemplate.postForResource("graphql/get-site-by-id.graphql");

        assertTrue(response.isOk());

        assertEquals("1", response.get("$.data.site.id"));
        assertEquals("DGS-1", response.get("$.data.site.name"));
    }
}
